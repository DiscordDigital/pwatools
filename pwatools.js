var pwatools = {
    fixViewport: function() {
        var html = `<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">`;
        $("head").append(html);
    },
    setStatusBarColorFromOS: function() {
        var html = `<meta name="apple-mobile-web-app-status-bar-style" content="default">`;
        $("head").append(html);
    },
    setStatusBarColorToBody: function() {
        var html = `<meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">`;
        $("head").append(html);
    },
    setThemeColor: function(color) {
        var html = `<meta name="theme-color" content="${color}">`;
        $("head").append(html);
    },
    getIoniconsIcon: function(name) {
        var html = `<ion-icon name='${name}'></ion-icon>`;
        return html;
    },
    resizeBody: function() {
        $("body").css('min-height', '100vh');
    },
    emulatePhone: function() {
        var x = "367px";
        var y = "655px";
        $("body").css('width', x);
        $("html").css('display', 'flex');
        $("html").css('align-items', 'center');
        $("html").css('justify-content', 'center');
        $("html").css('min-height', '100vh');
        $("html").css('background-color', 'gray');
        $("body").css('min-height', 'unset');
        $("#bottom-navigation").css('max-width',x);
        $("#bottom-navigation").css('position','sticky');
        $("#pwa-content").css('height',y);
        $("#pwa-content").css('overflow','auto');
        $("#pwa-content").css('scrollbar-width', 'thin');
        $("#pwa-content").css('z-index', '50');
        $("#pwa-content").css('position', 'relative');
        $("#pwa-content").css('margin-top', '41px');
        $("body").css('border-radius', '10px 10px 10px 10px');
        $("body").css('-moz-border-radius', '10px 10px 10px 10px');
        $("body").css('-webkit-border-radius', '10px 10px 10px 10px');
        $("#bottom-navigation").css('border-radius', '0px 0px 57px 57px');
        $("#bottom-navigation").css('-moz-border-radius', '0px 0px 57px 57px');
        $("#bottom-navigation").css('-webkit-border-radius', '0px 0px 57px 57px');
        $("html").append("<div class='phone-notch-background'></div>")
        $(".phone-notch-background").css('height','45px')
        $(".phone-notch-background").css('width','367px')
        $(".phone-notch-background").css('position', 'absolute');
        $(".phone-notch-background").css('margin-top', '-751px');
        $(".phone-notch-background").append("<span class='pwa-update-clock'>00:00</span>")
        $(".pwa-update-clock").css('position','absolute');
        $(".pwa-update-clock").css('top','21px');
        $(".pwa-update-clock").css('left','35px');
        $(".phone-notch-background").append("<span class='pwa-watermark'>pwatools</span>")
        $(".pwa-watermark").css('height', '500px');
        $(".pwa-watermark").css('width', '450px');
        $(".pwa-watermark").css('height', '919px');
        $(".pwa-watermark").css('position', 'absolute');
        $(".pwa-watermark").css('z-index', '5');
        $(".pwa-watermark").css('top', '20px');
        $(".pwa-watermark").css('left', '275px');
        $("html").append("<div class='phone-bottom-notch'></div>")
        $(".phone-bottom-notch").css('position', 'absolute');
        $(".phone-bottom-notch").css('height', '5px');
        $(".phone-bottom-notch").css('width', '150px');
        $(".phone-bottom-notch").css('background-color', 'rgb(240, 144, 101)');
        $(".phone-bottom-notch").css('z-index', '5000');
        $(".phone-bottom-notch").css('margin-top', '757px');
        $(".phone-bottom-notch").css('border-radius', '10px 10px 10px 10px');
        $(".phone-bottom-notch").css('-moz-border-radius', '10px 10px 10px 10px');
        $(".phone-bottom-notch").css('-webkit-border-radius', '10px 10px 10px 10px');
        $("html").append("<div class='phone-frame'></div>")
        $(".phone-frame").css('width', '385px');
        $(".phone-frame").css('height', '798px');
        $(".phone-frame").css('position', 'absolute');
        $(".phone-frame").css('z-index', '5');
        $(".phone-frame").css('background', " url('data:image/png;base64,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AIKJAEAwEQAIJgIAwUQAIJgIAAQTAYBgIgAQTAQAgokAQDARAAgmAgDBRAAgmAgABBMBgGAiABBMBACCiQBAMBEACCYCAMFEACCYCAAEEwGAYCIAEEwEAIKJAEAwEQAIJgIAwUQAIJgIAAQTAYBgIgAQTAQAgokAQDARAAgmAgDBRAAgmAgABBMBgGAiABBMBACCiQBAMBEACCYCAMFEACCYCAAEEwGAYCIAEEwEAIKJAEAwEQAIJgIAwUQAIJgIAAQTAYBgIgAQTAQAgokAQDARAAgmAgDBRAAgmAgABBMBgGAiABBMBACCiQBAMBEACCYCAMFEACCYCAAEEwGAYCIAEEwEAIKJAEAwEQAIJgIAwUQAIJgIAAQTAYBgIgAQTAQAgokAQDARAAgmAgDBRAAgmAgABBMBgGAiABBMBACCiQBAMBEACCYCAMFEACCYCAAEEwGAYCIAEEwEAIKJAEAwEQAIJgIAwUQAIJgIAAQTAYBgIgAQTAQAgokAQDARAAgmAgDBRAAgmAgABBMBgGAiABBMBACCiQBAMBEACCYCAMFEACCYCAAEEwGAYCIAEEwEAIKJAEAwEQAIJgIAwUQAIJgIAAQTAYBgIgAQTAQAgokAQDARAAgmAgDBRAAgmAgABBMBgGAiABBMBACCiQBAMBEACCYCAMFEACCYCAAEEwGAYCIAEEwEAIKJAEAwEQAIJgIAwUQAIJgIAAQTAYBgIgAQTAQAgokAQDARAAgmAgDBRAAgmAgABBMBgGAiABBMBACCiQBAMBEACCYCAMFEACCYCAAEEwGAYCIAEEwEAIKJAEAwEQAIJgIAwUQAIJgIAAQTAYBgIgAQTAQAgokAQDARAAgmAgDBRAAgmAgABBMBgGAiABBMBACCiQBAMBEACCYCAMFEACCYCAAEEwGAYCIAEEwEAIKJAEAwEQAIJgIAwUQAIJgIAAQTAYBgIgAQTAQAgokAQDARAAgmAgDBRAAgmAgABBMBgGAiABBMBACCiQBAMBEACCYCAMFEACCYCAAEEwGAYCIAEEwEAIKJAEAwEQAIJgIAwUQAIJgIAAQTAYBgIgAQTAQAgokAQDARAAgmAgDBRAAgmAgABBMBgGAiABBMBACCiQBAMBEACCYCAMFEACCYCAAEEwGAYCIAEEwEAIKJAEAwEQAIJgIAwUQAIJgIAAQTAYBgIgAQTAQA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')");
        $("html").css('background', "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAVwAAAFcAGai4/fAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAnpJREFUeJzt2UluVDEURuGTpwxKlKoQSGSHbIulsKBEIqJQIDMYEEKq8Ss31/1/pndi+ZMtWb75/OXrbxw9PB44PD27xiqw3bsNdx/fA84tZ3ENhGGbDwY4QIRhmy8GXAARhm0hGHACIgzbQjHgDYgwbIvBgBcQYdgWiwGwCMO2FAy4YRGGXakYD48H9ztEhWWBcXj6JRCLrDBg5aWu/LLEAIEkZY0BAokuBwYIJKpcGCCQ4HJigECCyo0BAvGuBAYIxKtSGCCQq5XEAIGsVhoDBOKsBgYI5GK1MEAgZ9XEAIEcVRsDBPJaCxggEKAdDBBIUxgwOUhrGDAxSIsYMClIqxgwIUjLGDAZSOsYMBFIDxgwCUgvGDABSE8YMDhIbxgwMEiPGDAoSK8YMCBIzxgwGEjvGDAQyAgYMAjIKBgwAMhIGNA5yGgY0DHIiBjQKcioGNAhyMgY0BnI6BjQEcgMGNAJyCwY0AHITBjQOMhsGNAwyIwY0CjIrBjQIMjMGNAYyOwY0BCIMP7WBIgw/lcdRBjHVQURxnnVQIRxuSogwnBXHEQY6xUFEcb1ioEIw68iIMLwLzuIMMLKCiKM8LKBCCOuLCDCiM8cRBhpmYIIIz0zEGHYZAIiDLuSQYRhWxKIMOyLBhFGnqJAhJGvYBBh5C0IRBj58wYRRpm8QIRRrqsgwijbKogwyucEEUadLoIIo15nIMKo2xGIMOr3CiKMNlpAGC21CKOtblMw7r9958fPZ+s1Tdt+u2FJORnCsGu/3fDpwz7mP0TXlHX/MCD4P0QY1r3FgCAQYVi3O8EAbxBhWLfbbrg7wQAvEGFY58KAqyDCsG4NA+AP/hK5raooPAsAAAAASUVORK5CYII=')");
        var time = new Date($.now());
        var minutes = time.getMinutes().toString();
        var hours = time.getHours().toString();
        if (minutes.length == 1) {
            minutes = '0' + minutes;
        }
        if (hours.length == 1) {
            hours = '0' + hours;
        }
        $(".pwa-update-clock").text(time.getHours() + ":" + minutes)
        setInterval(function(){
            var time = new Date($.now());
            var minutes = time.getMinutes().toString();
            if (minutes.length == 1) {
                minutes = '0' + minutes;
            }
            $(".pwa-update-clock").text(hours + ":" + minutes)
        }, 30000);
    },
    getExternalNavItem: function(name, href, iconElement, openInNewTab = true) {
        if (openInNewTab) {
            var linkTarget = "target='_blank'"
        } else {
            var linkTarget = ""
        }
        var html = `<div class="col text-center"><a class="external-page-button" ${linkTarget} href="${href}">${iconElement}</a><p>${name}</p></div>`;
        return html;
    },
    getNavItem: function(name, href, iconElement, isActive = false, secondaryIconElement = null) {
        var primaryIcon;
        var secondaryIcon;
        if (isActive) {
            var activeString = "active-page"
        } else {
            var activeString = ""
        }
        if (secondaryIconElement != null) {
            primaryIcon = `<span style='display: none' class="pwa-primaryIcon">${iconElement}</span>`;
            secondaryIcon = `<span style='display: none' class="pwa-secondaryIcon">${secondaryIconElement}</span>`;
            if (isActive) {
                iconElement = secondaryIconElement;
            }
        } else {
            primaryIcon = "";
            secondaryIcon = "";
        }
        var html = `<div class="col text-center ${activeString}">${primaryIcon}${secondaryIcon}<a class="page-button" href="${href}" target="_top">${iconElement}</a><p>${name}</p></div>`;
        return html;
    },
    spawnNavigation: function(navItems) {
        var html = `<div class="d-flex flex-column" id="bottom-navigation"><div class="row" id="navigation-contents">${navItems}</div></div>`
        $("body").append(html)
    },
    setPageIcon: function(url) {
        var html = `<link rel="icon" type="image/png" href="${url}"><link rel="apple-touch-icon" href="${url}">`;
        $("head").append(html)
    },
    setPageName: function(name) {
        if ($("title").length != 0) {
            $("title").text(name)
        } else {
            var html = `<title>${name}</title>`
            $("head").append(html)
        }
    },
    spawnContentContainer: function() {
        $("body").append("<div id='pwa-content'></div>")
    },
    loadPage: function(url, addBackButton = false, activePage = null) {
        if (url != undefined) {
            console.log("Loading page " + url)
            $.ajax({
                type: "GET",
                url: url,
                success: function(html)
                {
                    if (addBackButton) {
                        var backbuttonicon = "url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAAAoCAYAAAACJPERAAAACXBIWXMAAA0rAAANKwGYceyrAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAA11JREFUWIXFmE9oXFUUxn/nzYwTWgmCSTsTkTaIVbCpcae40o0iBXEpxU2tEVKqFhQyk2nzRJtYKYRSLZZ2YSsI1kasVrtxU1y78M9GbSmIzp+0gxObZCaZmfu5mEn6FBoz6XvxW77z7vlxLvee871nrKdG86+A91J8XWB+vodFOwsaxFiIRQ7Mlp5CXAB2gG0A1aKr1L/aRT15DLnnEHcHIjGLBHig8BBNnQPrx0gGIgLVvHBpMnLFUcQ3mD34T6AqoO9Q7NHwKvWnUyy6c5gGgO5AZAaoIPYynv4KIBzoweLzNN1hsHuA1u6JKsYcuDF+6TvBp9Zcev32oH65m0b9JHJPgvW0UzZAcxgfMNd4k8l7q/9etnZopvQYMZ1GbAUlaB2SGfAuItvP+ObSrZZ2DvUVpz49AdoFSrez/IXjZ7DdjKd++q8UnUFzxX7QFGIbsBGsArqOYw8T6UurTbP6K5Mt7kHuEuIRhAdcA8uQSD3QCRBWU2mm0IvxCaaHwe7EmEXeURLz7+L31zqBrQ6ayz+NvPeALcA8xgXi7MdPTa8FtjLUv9pFves4xrM4xTD7nmbsRd7ZdPl2YLeGZovb8XQWWR+4Ao4hJvq+DQO2pMCUkZErjSDtRiRAr3IofQZMYQJhqdLcb/dB4kukTTjvCLM3Jjl2/0LYsJvQ0WsHoTGC2cfEq6/j91eigi3JQ41oZuoK+p+2d1mBg2SWxCnHeOqj6A5SUNnidsydB9uIUxHYF/aVWaE5JE+B7QRqSD/g4sPRNYegcr/vBO99xGawWbAvSDASTRsMKlPoJcYUskEkh1FDdpQ7qpPRNPygsn/sBW8MoxcoA4sgn0T6FL65aKDQGuLSeaRtmCUxSogyjuFOZura7EqjdAS0C9EDCLiO9Ct4L4dvV4I6UHocp9OYtiDiGI22fbmI894I15gF5Ze7qdc/xNwTyO4CQFrAmMe848zVD4VrQYMazb8A3uFld9jSDVCVJmNcSZ8Mz2wH5U+naLjPkQaADTcDqoDNYAzzdvrrcKEtgJEr5nDsa1+tYKyM7DJ4QxF9KhYHcG4KvK1t99/mIiz0T8W23kr9SGJhB+bOgP5cfm4YeIvRD/Bc4RngBKIP8ECV9XENrR8dnwGD2HpblUz+NTwb+hsTWGRZWPexYwAAAABJRU5ErkJggg==')";
                        var backbuttonhtml = `<div class="pwa-back"><a style="background: ${backbuttonicon}; height: 40px; width: 29px; display: block;" class="pwa-back-button" href="${activePage}" style="width: 40px;background-repeat: no-repeat;height: 40px;display: block;margin: 5px;"></a></div>`;
                        var html = backbuttonhtml + html
                        $("#pwa-content").html(html)
                        $(".pwa-back-button").click(function(event){
                            event.preventDefault();
                            pwatools.loadPage(activePage)
                            $(".pwa-back-button").unbind()
                        });
                    } else {
                        $("#pwa-content").html(html)
                    }
                    pwatools.integrateInternalLinks()
                }
            });
        }
    },
    integrateInternalLinks: function() {
        $(".pwa-internal").click(function(event) {
            event.preventDefault();
            var link = $(event.target).attr('href')
            if (link) {
                var activePage = $(".active-page").children('.page-button').attr('href')
                pwatools.loadPage(link, true, activePage)
            } else {
                link = $(event.target).parents('a').attr('href')
                var activePage = $(".active-page").children('.page-button').attr('href')
                pwatools.loadPage(link, true, activePage)
            }
        });
    },
    integrateNavigation: function() {
        $(".page-button").click(function(event){
            event.preventDefault();
            if ($(event.target).parents('a').length == 1) {
                var link = $(event.target).parents('a').attr('href')
            } else {
                var link = $(event.target).attr('href')
            }
            if ($(".active-page").children('.page-button').attr('href') != link) {
                if ($(".active-page").children('.pwa-primaryIcon').length == 1) {
                    $(".active-page").children('.page-button').html($(".active-page").children('.pwa-primaryIcon').html());
                }
            }
            $(".page-button").parent().removeClass("active-page")
            if ($(event.target).parents('a').length == 1) {
                $(event.target).parents('a').parent().addClass("active-page")
            } else {
                $(event.target).parent().addClass("active-page")
            }
            if ($(".active-page").children('.pwa-secondaryIcon').length == 1) {
                $(".active-page").children('.page-button').html($(".active-page").children('.pwa-secondaryIcon').html());
            }
            pwatools.loadPage(link)
        });
    },
    initPage: function(appIconUrl, pageName, navigationItems, startPage) {
        pwatools.fixViewport()
        pwatools.setStatusBarColorFromOS()
        pwatools.resizeBody()
        pwatools.spawnContentContainer()
        pwatools.setPageIcon(appIconUrl)
        pwatools.setPageName(pageName)
        pwatools.spawnNavigation(navigationItems)
        pwatools.integrateNavigation()
        pwatools.loadPage(startPage)
    }
}
