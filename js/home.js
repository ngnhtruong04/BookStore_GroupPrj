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
            sessionStorage.setItem('tbook_buy_now', JSON.stringify({ ...product, qty: 1 }));
            window.location.href = 'thanhtoan.html';
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

        // Handlers
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
        const items = buyNow ? [buyNow] : Cart.read();
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
            if(buyNow){ sessionStorage.removeItem('tbook_buy_now'); }
            else { Cart.clear(); }
            window.location.href = 'thanhtoan-thanhcong.html';
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