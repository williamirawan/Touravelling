// User
const user = document.getElementById('user');
const temp = JSON.parse(localStorage.getItem('temp'));

if (user) {
    if (temp.length > 8) {
        user.innerHTML = `<i class="fa fa-user"></i> ${temp.substr(0, 8)}...`;
    } else {
        user.innerHTML = `<i class="fa fa-user"></i> ${temp}`;
    }
}

// Feedback
const feedbackButton = document.getElementById('btn-feedback');

if (feedbackButton) {
    feedbackButton.addEventListener('click', function(e) {
        alert('Saran anda telah dikirim.');
    
        $('html, body').animate({
            scrollTop: $('#feedback').offset().top - 100
        }, 500);
    
        e.preventDefault();
    });
}

// Card
let packageTitle, packageDate, packageItinerary, packagePrice;

function getDatabase() {
    if (!localStorage.getItem('package-title')) packageTitle = [];
    else packageTitle = JSON.parse(localStorage.getItem('package-title'));
    
    if (!localStorage.getItem('package-date')) packageDate = [];
    else packageDate = JSON.parse(localStorage.getItem('package-date'));
    
    if (!localStorage.getItem('package-itinerary')) packageItinerary = [];
    else packageItinerary = JSON.parse(localStorage.getItem('package-itinerary'));
    
    if (!localStorage.getItem('package-price')) packagePrice = [];
    else packagePrice = JSON.parse(localStorage.getItem('package-price'));
}

const card = document.getElementById('card');
const booking = document.getElementsByClassName('booking')[0];
let order;

if (card) {
    getDatabase();

    if (booking) {
        order = JSON.parse(localStorage.getItem('order'));

        for (let i = 0; i < packageTitle.length; i++) {
            if (i === order) {
                card.innerHTML += `
                    <div class="full">
                        <img src="../img/travel.png">
                        <span><i class="fa fa-map-pin"></i> ${packageTitle[i]}</span><hr>
                        <h2><i class="fa fa-info-circle"></i> Booking ID</h2>
                        <p class="id">${i}0357986421</p>
                        <h2><i class="fa fa-calendar"></i> Tanggal</h2>
                        <p class="date">${packageDate[i]}</p>
                        <h2><i class="fa fa-route"></i> Rencana Perjalanan</h2>
                        <p class="itinerary">${packageItinerary[i]}</p>
                        <h2><i class="fa fa-tag"></i> Harga</h2>
                        <p class="price">Rp. ${packagePrice[i]},-</p>
                    </div>
                `;
            }
        }
    } else {
        for (let i = 0; i < packageTitle.length; i++) {
            card.innerHTML += `
                <div class="full">
                    <img src="../img/travel.png">
                    <span><i class="fa fa-map-pin"></i> ${packageTitle[i]}</span><hr>
                    <h2><i class="fa fa-calendar"></i> Tanggal</h2>
                    <p class="date">${packageDate[i]}</p>
                    <h2><i class="fa fa-route"></i> Rencana Perjalanan</h2>
                    <p class="itinerary">${packageItinerary[i]}</p>
                    <h2><i class="fa fa-tag"></i> Harga</h2>
                    <p class="price">Rp. ${packagePrice[i]},-</p>
                    <button type="button" class="btn-book"><i class="fa fa-plus"></i> Pesan Sekarang</button>
                </div>
            `;
        }
    }
}

const bookButton = document.getElementsByClassName('btn-book');

if (bookButton) {
    for (let i = 0; i < bookButton.length; i++) {
        bookButton[i].addEventListener('click', function() {
            localStorage.setItem('order', JSON.stringify(i));
            window.location = 'booking.html';
        });
    }
}

const finishButton = document.getElementById('btn-finish');

if (finishButton) {
    finishButton.addEventListener('click', function() {
        alert('Berhasil memesan ' + packageTitle[order]);
        window.location = 'companyprofile.html';
    });
}

// if (!localStorage.getItem('order')) item = [];
// else item = JSON.parse(localStorage.getItem('order'));
// item.push('');
// localStorage.setItem('order', JSON.stringify(item));

// Scroll
$('.page-scroll').on('click', function(e) {
    let obj = $(this).attr('href');
    let objElement = $(obj);

    $('html, body').animate({
        scrollTop: objElement.offset().top - 100
    }, 800);

    e.preventDefault();
});

// Parallax
$(window).on('load', function() {
    $('.tag-photo').addClass('show');
    $('.text').addClass('show');
});

$(window).scroll(function() {
    let wScroll = $(this).scrollTop();

    if ($('.about-us').length) {
        if (wScroll > $('.about-us').offset().top - 250) {
            $('.mivi').addClass('show');
        }
    
        if (wScroll < $('.about-us').offset().top - 250) {
            $('.mivi').removeClass('show');
        }
    }

    if ($('.card').length) {
        if (wScroll > $('.card').offset().top - 250) {
            $('.card .small').each(function(i) {
                setTimeout(function() {
                    $('.card .small').eq(i).addClass('show');
                }, 200 * i);
            });

            $('.card .full').each(function(i) {
                setTimeout(function() {
                    $('.card .full').eq(i).addClass('show');
                }, 200 * i);
            });
        }

        if (wScroll < $('.card').offset().top - 250) {
            $('.card .small').each(function(i) {
                setTimeout(function() {
                    $('.card .small').eq(i).removeClass('show');
                }, 200 * i);
            });

            $('.card .full').each(function(i) {
                setTimeout(function() {
                    $('.card .full').eq(i).removeClass('show');
                }, 200 * i);
            });
        }
    }

    if ($('.travel-list').length) {
        if (wScroll > $('.travel-list').offset().top - 250) {
            $('.travel-list .list').each(function(i) {
                setTimeout(function() {
                    $('.travel-list .list').eq(i).addClass('show');
                }, 200 * i);
            });
        }

        if (wScroll < $('.travel-list').offset().top - 250) {
            $('.travel-list .list').each(function(i) {
                setTimeout(function() {
                    $('.travel-list .list').eq(i).removeClass('show');
                }, 200 * i);
            });
        }
    }

    if ($('.feedback').length) {
        if (wScroll > $('.feedback').offset().top - 250) {
            $('.feedback tr').each(function(i) {
                setTimeout(function() {
                    $('.feedback tr').eq(i).addClass('show');
                }, 200 * i);
            });

            setTimeout(function() {
                $('.feedback button').addClass('show');
            }, 600);
        }
        
        if (wScroll < $('.feedback').offset().top - 250) {
            $('.feedback tr').each(function(i) {
                setTimeout(function() {
                    $('.feedback tr').eq(i).removeClass('show');
                }, 200 * i);
            });

            setTimeout(function() {
                $('.feedback button').removeClass('show');
            }, 600);
        }
    }

    if ($('.identity').length) {
        if (wScroll > $('.identity').offset().top - 250) {
            $('.identity tr').each(function(i) {
                setTimeout(function() {
                    $('.identity tr').eq(i).addClass('show');
                }, 200 * i);
            });

            setTimeout(function() {
                $('.identity button').addClass('show');
            }, 600);
        }

        if (wScroll < $('.identity').offset().top - 250) {
            $('.identity tr').each(function(i) {
                setTimeout(function() {
                    $('.identity tr').eq(i).removeClass('show');
                }, 200 * i);
            });

            setTimeout(function() {
                $('.identity button').removeClass('show');
            }, 600);
        }
    }

    if ($('.contact-us').length) {
        if (wScroll > $('.contact-us').offset().top - 300) {
            $('.contact-us label').each(function(i) {
                $('.contact-us label').eq(i).addClass('show');
            });

            $('.contact-us button').each(function(i) {
                $('.contact-us button').eq(i).addClass('show');
            });
        }

        if (wScroll < $('.contact-us').offset().top - 300) {
            $('.contact-us label').each(function(i) {
                $('.contact-us label').eq(i).removeClass('show');
            });

            $('.contact-us button').each(function(i) {
                $('.contact-us button').eq(i).removeClass('show');
            });
        }
    }
});