$(document).ready(function() {
    // Customizing carousel sliding speed and adding auto slide functionality
    $('.carousel').carousel({
        interval: 2000, // Change slide interval time to 3 seconds
        pause: "hover", // Pause on mouse hover
        wrap: true // Wrap around the images
    });

    $("#xacNhan").click(function() {
        var selectedOption = $("#tinh").children("option:selected").text();
        var iconHTML = ' <i class="fa-solid fa-caret-down"></i>';
        $("#address").html(selectedOption + iconHTML);
        // $("#tinh").change(function(){
        // })
    })

    // Category dropdown toggle
    $(document).on('click', '.category-icon', function(e){
        e.stopPropagation();
        var $dropdown = $(this).closest('.category-wrapper').find('.cat-dropdown');
        $('.cat-dropdown').not($dropdown).hide();
        $dropdown.toggle();
    });

    $(document).on('click', '.cat-dropdown', function(e){
        e.stopPropagation();
    });

    $(document).on('click', function(){
        $('.cat-dropdown').hide();
    });

    // ---- Cart utilities (localStorage) ----
    window.Cart = (function(){
        const KEY = 'tbook_cart_v1';
        function read(){
            try { return JSON.parse(localStorage.getItem(KEY) || '[]'); } catch(e){ return []; }
        }
        function write(items){ localStorage.setItem(KEY, JSON.stringify(items)); }
        function add(item){
            const items = read();
            const idx = items.findIndex(x => x.id === item.id);
            if(idx >= 0){ items[idx].qty += item.qty || 1; }
            else { items.push({ id: item.id, name: item.name, price: item.price, image: item.image, qty: item.qty || 1 }); }
            write(items); return items;
        }
        function setQty(id, qty){ const items = read(); const it = items.find(x=>x.id===id); if(it){ it.qty = Math.max(1, qty|0); write(items);} return items; }
        function remove(id){ const items = read().filter(x=>x.id!==id); write(items); return items; }
        function clear(){ write([]); }
        function count(){ return read().reduce((s,x)=>s+x.qty,0); }
        function total(){ return read().reduce((s,x)=>s+x.qty*x.price,0); }
        return { read, add, setQty, remove, clear, count, total };
    })();

    // Helper: parse price like "379.100 đ" to number
    function parsePrice(text){
        if(!text) return 0; return Number(text.replace(/[^0-9,\.]/g,'').replace(/\./g,'').replace(/,(\d)$/,'.$1')) || 0;
    }
    function formatPrice(v){
        return (v||0).toLocaleString('vi-VN') + ' đ';
    }

    // ---- Product detail handlers ----
    if($('.product-detail').length){
        const $name = $('.product-essen-detail h3').first();
        const $price = $('.product-essen-detail .gia').first();
        const $img = $('.product-img .left img').first();
        const product = {
            id: document.location.pathname.split('/').pop().replace('.html',''),
            name: $.trim($name.text()||'Sản phẩm'),
            price: parsePrice($price.text()),
            image: $img.attr('src') || ''
        };
        const $addBox = $('.product-img .add-box');
        const $buttons = $addBox.find('button');
        const $btnAdd = $buttons.eq(0);
        const $btnBuyNow = $buttons.eq(1);

        $btnAdd.on('click', function(){
            Cart.add({...product, qty: 1});
            // Simple feedback
            try { alert('Đã thêm vào giỏ hàng'); } catch(e){}
        });

        $btnBuyNow.on('click', function(){
            sessionStorage.setItem('tbook_buy_now', JSON.stringify({ ...product, qty: Math.max(1, parseInt($('#counter').text(),10)||1) }));
            // Thêm tham số để trang thanh toán biết đây là hành động "Mua ngay"
            window.location.href = 'thanhtoan.html?buynow=1';
        });
    }

    // ---- Cart page render (giohang.html) ----
    if($('.breadcrumb .breadcrumb-item.active:contains("Giỏ hàng")').length){
        renderCartPage();
    }

    function renderCartPage(){
        const $container = $('#cart-container');
        if(!$container.length) return;
        const items = Cart.read();
        if(items.length === 0){
            $container.html('<p>Giỏ hàng trống.</p>');
            $('#cart-summary').html('');
            return;
        }
        const rows = items.map(it => `
            <div class="cart-item" data-id="${it.id}" style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid #eee;">
                <img src="${it.image}" alt="${it.name}" style="width:64px;height:64px;object-fit:cover;">
                <div style="flex:1;">
                    <div style="font-weight:600;">${it.name}</div>
                    <div style="color:#444;">${formatPrice(it.price)}</div>
                </div>
                <div>
                    <button class="qty-dec" style="padding:2px 8px;">-</button>
                    <input class="qty" value="${it.qty}" style="width:40px;text-align:center;" />
                    <button class="qty-inc" style="padding:2px 8px;">+</button>
                </div>
                <div class="sub" style="width:120px;text-align:right;">${formatPrice(it.qty*it.price)}</div>
                <button class="remove" style="margin-left:8px;color:#a00;">Xóa</button>
            </div>
        `).join('');
        $container.html(rows);
        $('#cart-summary').html(`<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;">
            <strong>Tổng cộng:</strong>
            <strong>${formatPrice(Cart.total())}</strong>
        </div>
        <a href="thanhtoan.html"><button style="background-color:#4942E4;color:#fff;padding:10px 16px;border-radius:6px;border:none;">Thanh toán</button></a>`);

        // Gỡ bỏ các handler cũ để tránh nhân đôi (khi render lại nhiều lần)
        $container.off('click', '.qty-inc');
        $container.off('click', '.qty-dec');
        $container.off('change', '.qty');
        $container.off('click', '.remove');

        // Handlers (được bind duy nhất sau mỗi render)
        $container.on('click', '.qty-inc', function(){
            const id = $(this).closest('.cart-item').data('id');
            const items = Cart.read();
            const it = items.find(x=>x.id===id); if(!it) return;
            Cart.setQty(id, it.qty+1); renderCartPage();
        });
        $container.on('click', '.qty-dec', function(){
            const id = $(this).closest('.cart-item').data('id');
            const items = Cart.read();
            const it = items.find(x=>x.id===id); if(!it) return;
            Cart.setQty(id, Math.max(1, it.qty-1)); renderCartPage();
        });
        $container.on('change', '.qty', function(){
            const id = $(this).closest('.cart-item').data('id');
            const val = parseInt($(this).val(),10)||1; Cart.setQty(id, val); renderCartPage();
        });
        $container.on('click', '.remove', function(){
            const id = $(this).closest('.cart-item').data('id'); Cart.remove(id); renderCartPage();
        });
    }

    // ---- Checkout page render (thanhtoan.html) ----
    if(window.location.pathname.endsWith('thanhtoan.html')){
        renderCheckoutPage();
    }

    function renderCheckoutPage(){
        const $list = $('#checkout-items');
        if(!$list.length) return;
        let buyNow = null; try { buyNow = JSON.parse(sessionStorage.getItem('tbook_buy_now')||'null'); } catch(e){}
        const cartItems = Cart.read();
        const params = new URLSearchParams(window.location.search);
        let items;
        if(params.get('buynow') === '1' && buyNow){
            // Trường hợp mua ngay ưu tiên chỉ sản phẩm vừa mua
            items = [buyNow];
        } else if(cartItems.length){
            // Nếu có giỏ hàng dùng giỏ hàng (kể cả khi còn buyNow trong sessionStorage)
            items = cartItems;
        } else if(buyNow){
            // Giỏ rỗng nhưng còn buy now => dùng buy now
            items = [buyNow];
        } else {
            items = [];
        }
        if(items.length === 0){
            $list.html('<p>Không có sản phẩm để thanh toán.</p>');
            $('#checkout-summary').html('');
            return;
        }
        const rows = items.map(it => `
            <div style="display:flex;align-items:center;gap:12px;padding:8px 0;border-bottom:1px solid #eee;">
                <img src="${it.image}" alt="${it.name}" style="width:64px;height:64px;object-fit:cover;">
                <div style="flex:1;">
                    <div style="font-weight:600;">${it.name}</div>
                    <div style="color:#444;">SL: ${it.qty}</div>
                </div>
                <div style="width:120px;text-align:right;">${formatPrice(it.qty*it.price)}</div>
            </div>
        `).join('');
        $list.html(rows);
        const total = items.reduce((s,x)=>s+x.qty*x.price,0);
        $('#checkout-summary').html(`<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0;">
            <strong>Tổng cộng:</strong>
            <strong>${formatPrice(total)}</strong>
        </div>`);

        $('#checkout-form').on('submit', function(e){
            e.preventDefault();
            // Minimal validation
            const name = $.trim($('#fullname').val());
            const phone = $.trim($('#phone').val());
            const addr = $.trim($('#address-input').val());
            if(!name || !phone || !addr){ alert('Vui lòng nhập đầy đủ thông tin.'); return; }
            // Success: clear buy-now or cart accordingly
            const params = new URLSearchParams(window.location.search);
            if(params.get('buynow') === '1'){ sessionStorage.removeItem('tbook_buy_now'); }
            else { Cart.clear(); sessionStorage.removeItem('tbook_buy_now'); }
            window.location.href = 'thanhtoan-thanhcong.html';
        });
    }

    // ---- Category dropdown injection for pages thiếu markup ----
    if($('.category-wrapper').length === 0 && $('.header-menu .bi-card-list').length){
        var $icon = $('.header-menu .bi-card-list').first();
        $icon.addClass('category-icon');
        $icon.wrap('<span class="category-wrapper" style="position:relative;display:inline-block;"></span>');
        var dropdownHtml = '<div class="cat-dropdown" style="position:absolute; top:100%; left:0; background:#fff; border:1px solid #ddd; box-shadow:0 2px 6px rgba(0,0,0,0.15); padding:8px; display:none; z-index:1000;">'
            + '<ul style="list-style:none;margin:0;padding:0;">'
            + '<li style="padding:4px 8px;"><a href="manga.html">Manga</a></li>'
            + '<li style="padding:4px 8px;"><a href="sololeveling.html">Manhwa</a></li>'
            + '<li style="padding:4px 8px;"><a href="#">Light Novel</a></li>'
            + '<li style="padding:4px 8px;"><a href="#">Comics</a></li>'
            + '<li style="padding:4px 8px;"><a href="#">Novel</a></li>'
            + '</ul></div>';
        $icon.after(dropdownHtml);
    }

    // ---- Tìm kiếm sách ----
    // Dataset đơn giản; có thể mở rộng sau
    const PRODUCTS = [
        { id:'giacquan-giaotiep', name:'Tủ Sách Thế Giới Động Vật - Giác Quan Và Giao Tiếp', url:'giacquan-giaotiep.html' },
        { id:'tuduytichcucdelamgiau', name:'Học cách làm giàu - Tư duy tích cực để thành công', url:'tuduytichcucdelamgiau.html' },
        { id:'dothai', name:'Phương pháp giáo dục con của người Do Thái', url:'dothai.html' },
        { id:'phieuluu', name:'[Tập truyện] Phiêu lưu kỳ thú', url:'phieuluu.html' },
        { id:'cauhoi', name:'Thay đổi câu hỏi thay đổi cuộc', url:'cauhoi.html' },
        { id:'sololeveling', name:'Solo Leveling', url:'sololeveling.html' }
    ];

    // Tạo khung gợi ý nếu chưa có
    if($('.searchbox').length){
        const $box = $('.searchbox');
        if($box.find('.search-suggestions').length === 0){
            $box.css('position','relative');
            $box.append('<div class="search-suggestions" style="position:absolute;top:42px;left:0;width:100%;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 2px 6px rgba(0,0,0,0.15);display:none;max-height:260px;overflow:auto;z-index:1200;"></div>');
        }
        const $input = $box.find('input[type="text"]').first();
        const $suggest = $box.find('.search-suggestions');

        function renderSuggestions(query){
            const q = $.trim(query.toLowerCase());
            if(!q){ $suggest.hide(); return; }
            const matches = PRODUCTS.filter(p => p.name.toLowerCase().includes(q));
            if(matches.length === 0){
                $suggest.html('<div style="padding:8px;color:#666;">Không tìm thấy</div>').show();
                return;
            }
            $suggest.html(matches.map(m => '<div class="s-item" data-url="'+m.url+'" style="padding:8px;cursor:pointer;">'+m.name+'</div>').join('')).show();
        }

        $input.on('input', function(){
            renderSuggestions(this.value);
        });
        $input.on('keydown', function(e){
            if(e.key === 'Enter'){
                const first = $suggest.find('.s-item').first();
                if(first.length){ window.location.href = first.data('url'); }
            }
        });
        $suggest.on('click', '.s-item', function(){
            window.location.href = $(this).data('url');
        });
        $(document).on('click', function(e){
            if(!$(e.target).closest('.searchbox').length){ $suggest.hide(); }
        });
    }
});

var isHeaderFixed = false;
var headerMenu = document.querySelector('.header-menu');
var distanceFromTop = headerMenu.offsetTop;

window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY;

    if (scrollPosition >= distanceFromTop && !isHeaderFixed) {
        headerMenu.style.position = 'fixed';
        headerMenu.style.top = '0';
        isHeaderFixed = true;
    } else if (scrollPosition < distanceFromTop && isHeaderFixed) {
        headerMenu.style.position = 'static';
        isHeaderFixed = false;
    }
});

var counter = document.getElementById('counter');

function increment() {
    var currentValue = parseInt(counter.textContent);
    var newValue = currentValue + 1;
    counter.textContent = newValue;
}

function decrement() {
    var currentValue = parseInt(counter.textContent);
    if (currentValue > 1) {
        var newValue = currentValue - 1;
        counter.textContent = newValue;
    }
}