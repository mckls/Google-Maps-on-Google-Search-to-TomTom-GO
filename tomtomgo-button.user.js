// ==UserScript==
// @name         Google Maps to TomTom Go
// @namespace    me.kalus.mapstotomtom
// @version      1.1
// @description  This script adds a button in googles search that opens a desired place in TomTom Go.
// @author       Michael Kalus
// @match        https://www.google.com/search*
// @match        https://www.google.ac/search*
// @match        https://www.google.ad/search*
// @match        https://www.google.ae/search*
// @match        https://www.google.am/search*
// @match        https://www.google.as/search*
// @match        https://www.google.at/search*
// @match        https://www.google.az/search*
// @match        https://www.google.ba/search*
// @match        https://www.google.be/search*
// @match        https://www.google.bf/search*
// @match        https://www.google.bg/search*
// @match        https://www.google.bi/search*
// @match        https://www.google.bj/search*
// @match        https://www.google.bs/search*
// @match        https://www.google.by/search*
// @match        https://www.google.ca/search*
// @match        https://www.google.cat/search*
// @match        https://www.google.cc/search*
// @match        https://www.google.cd/search*
// @match        https://www.google.cf/search*
// @match        https://www.google.cg/search*
// @match        https://www.google.ci/search*
// @match        https://www.google.cl/search*
// @match        https://www.google.cm/search*
// @match        https://www.google.cn/search*
// @match        https://www.google.co.ao/search*
// @match        https://www.google.co.bw/search*
// @match        https://www.google.co.ck/search*
// @match        https://www.google.co.cr/search*
// @match        https://www.google.co.id/search*
// @match        https://www.google.co.il/search*
// @match        https://www.google.co.in/search*
// @match        https://www.google.co.jp/search*
// @match        https://www.google.co.ke/search*
// @match        https://www.google.co.kr/search*
// @match        https://www.google.co.ls/search*
// @match        https://www.google.co.ma/search*
// @match        https://www.google.co.mz/search*
// @match        https://www.google.co.nz/search*
// @match        https://www.google.co.th/search*
// @match        https://www.google.co.tz/search*
// @match        https://www.google.co.ug/search*
// @match        https://www.google.co.uk/search*
// @match        https://www.google.co.uz/search*
// @match        https://www.google.co.ve/search*
// @match        https://www.google.co.vi/search*
// @match        https://www.google.co.za/search*
// @match        https://www.google.co.zm/search*
// @match        https://www.google.co.zw/search*
// @match        https://www.google.com.af/search*
// @match        https://www.google.com.ag/search*
// @match        https://www.google.com.ai/search*
// @match        https://www.google.com.ar/search*
// @match        https://www.google.com.au/search*
// @match        https://www.google.com.bd/search*
// @match        https://www.google.com.bh/search*
// @match        https://www.google.com.bn/search*
// @match        https://www.google.com.bo/search*
// @match        https://www.google.com.br/search*
// @match        https://www.google.com.bz/search*
// @match        https://www.google.com.co/search*
// @match        https://www.google.com.cu/search*
// @match        https://www.google.com.cy/search*
// @match        https://www.google.com.do/search*
// @match        https://www.google.com.ec/search*
// @match        https://www.google.com.eg/search*
// @match        https://www.google.com.et/search*
// @match        https://www.google.com.fj/search*
// @match        https://www.google.com.gh/search*
// @match        https://www.google.com.gi/search*
// @match        https://www.google.com.gt/search*
// @match        https://www.google.com.hk/search*
// @match        https://www.google.com.jm/search*
// @match        https://www.google.com.kh/search*
// @match        https://www.google.com.kw/search*
// @match        https://www.google.com.lb/search*
// @match        https://www.google.com.lc/search*
// @match        https://www.google.com.ly/search*
// @match        https://www.google.com.mt/search*
// @match        https://www.google.com.mx/search*
// @match        https://www.google.com.my/search*
// @match        https://www.google.com.na/search*
// @match        https://www.google.com.nf/search*
// @match        https://www.google.com.ng/search*
// @match        https://www.google.com.ni/search*
// @match        https://www.google.com.np/search*
// @match        https://www.google.com.om/search*
// @match        https://www.google.com.pa/search*
// @match        https://www.google.com.pe/search*
// @match        https://www.google.com.ph/search*
// @match        https://www.google.com.pk/search*
// @match        https://www.google.com.pr/search*
// @match        https://www.google.com.py/search*
// @match        https://www.google.com.qa/search*
// @match        https://www.google.com.sa/search*
// @match        https://www.google.com.sb/search*
// @match        https://www.google.com.sg/search*
// @match        https://www.google.com.sl/search*
// @match        https://www.google.com.sv/search*
// @match        https://www.google.com.tj/search*
// @match        https://www.google.com.tr/search*
// @match        https://www.google.com.tw/search*
// @match        https://www.google.com.ua/search*
// @match        https://www.google.com.uy/search*
// @match        https://www.google.com.vc/search*
// @match        https://www.google.com.vn/search*
// @match        https://www.google.cv/search*
// @match        https://www.google.cz/search*
// @match        https://www.google.de/search*
// @match        https://www.google.dj/search*
// @match        https://www.google.dk/search*
// @match        https://www.google.dm/search*
// @match        https://www.google.dz/search*
// @match        https://www.google.ee/search*
// @match        https://www.google.es/search*
// @match        https://www.google.fi/search*
// @match        https://www.google.fm/search*
// @match        https://www.google.fr/search*
// @match        https://www.google.ga/search*
// @match        https://www.google.ge/search*
// @match        https://www.google.gg/search*
// @match        https://www.google.gl/search*
// @match        https://www.google.gm/search*
// @match        https://www.google.gp/search*
// @match        https://www.google.gr/search*
// @match        https://www.google.gy/search*
// @match        https://www.google.hn/search*
// @match        https://www.google.hr/search*
// @match        https://www.google.ht/search*
// @match        https://www.google.hu/search*
// @match        https://www.google.ch/search*
// @match        https://www.google.ie/search*
// @match        https://www.google.im/search*
// @match        https://www.google.iq/search*
// @match        https://www.google.is/search*
// @match        https://www.google.it/search*
// @match        https://www.google.je/search*
// @match        https://www.google.jo/search*
// @match        https://www.google.kg/search*
// @match        https://www.google.ki/search*
// @match        https://www.google.kz/search*
// @match        https://www.google.la/search*
// @match        https://www.google.li/search*
// @match        https://www.google.lk/search*
// @match        https://www.google.lt/search*
// @match        https://www.google.lu/search*
// @match        https://www.google.lv/search*
// @match        https://www.google.md/search*
// @match        https://www.google.me/search*
// @match        https://www.google.mg/search*
// @match        https://www.google.mk/search*
// @match        https://www.google.ml/search*
// @match        https://www.google.mn/search*
// @match        https://www.google.ms/search*
// @match        https://www.google.mu/search*
// @match        https://www.google.mv/search*
// @match        https://www.google.mw/search*
// @match        https://www.google.ne/search*
// @match        https://www.google.nl/search*
// @match        https://www.google.no/search*
// @match        https://www.google.nr/search*
// @match        https://www.google.nu/search*
// @match        https://www.google.pl/search*
// @match        https://www.google.pn/search*
// @match        https://www.google.ps/search*
// @match        https://www.google.pt/search*
// @match        https://www.google.ro/search*
// @match        https://www.google.rs/search*
// @match        https://www.google.ru/search*
// @match        https://www.google.rw/search*
// @match        https://www.google.sc/search*
// @match        https://www.google.se/search*
// @match        https://www.google.sh/search*
// @match        https://www.google.si/search*
// @match        https://www.google.sk/search*
// @match        https://www.google.sm/search*
// @match        https://www.google.sn/search*
// @match        https://www.google.so/search*
// @match        https://www.google.st/search*
// @match        https://www.google.td/search*
// @match        https://www.google.tg/search*
// @match        https://www.google.tk/search*
// @match        https://www.google.tl/search*
// @match        https://www.google.tm/search*
// @match        https://www.google.tn/search*
// @match        https://www.google.to/search*
// @icon         https://www.tomtom.com/goldstream/apple-touch-icon.7fdd68e2.png
// @grant        none
// @require      https://cdn.jsdelivr.net/npm/jquery@3/dist/jquery.min.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// ==/UserScript==



waitForKeyElements('a[data-url*="https://maps.google.com/maps/place"]', main);

function main(){

    // find all anchors with data-url starting with "https://maps.google.com/maps/place/"
    const googleMapsLink = document.querySelectorAll('a[data-url*="https://maps.google.com/maps/place"]');
    console.log(googleMapsLink);

    // find the first anchor with an "@" in the data-url, this is the one with the coordinates
    const target = Array.from(googleMapsLink).find(a => a.dataset.url.includes('@'));
    console.log(target);
    if (target) {
        // extract the coordinates located after "@" in the data-url
        const string = target.dataset.url.split('@')[1];
        console.log(string);

        // extract latitude and longitude
        const [lat, lng, ...rest] = string.split(',');
        const coordinates = `${lat},${lng}`;

        // construct the final URL
        const tomtomUrl = 'tomtomgo://x-callback-url/navigate?destination=' + coordinates;
        console.log(tomtomUrl);

        // assign the final URL as href to the anchor
        target.href = tomtomUrl;

        // function for the TomTom GO button
        function displayButton(url) {
            let button = document.createElement("a");
            button.classList.add('tomtomgo');
            button.href = tomtomUrl;
            button.target = "_blank";
            button.style.zIndex = "99999999999";
            button.style.position = "fixed";
            button.style.bottom = "0px";
            button.style.left = "0px";
            button.style.width = "100%";
            button.style.height = "auto";
            button.style.display = "block !important";
            button.innerHTML = '<div style="width: 100%; background: #1A1B16; padding: 8px; color:#BDC1C6; z-index: 99999; display: block !important"><div style="background: #1A73E8; width: 100%; color: #fff; width: calc(100% - 22px); border-radius: 4px; line-height: 42px; height: 42px; font-size: 1.25rem; display: flex;flex-direction: row;align-items: center;justify-content: center;padding: 4px;"><img width="24px" height="24px" style="border-radius: 8px; padding-right: 12px; line-height: 42px; " src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI3LjQuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkViZW5lXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IgoJIHZpZXdCb3g9IjAgMCAyMDAgMTU0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAyMDAgMTU0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6I0ZGRkZGRjt9Cjwvc3R5bGU+CjxnPgoJPHBhdGggY2xhc3M9InN0MCIgZD0iTTE3NS43LDQ4YzAuMy0wLjEsMC41LTAuMSwwLjYtMC4yYzIuNC0xLjYsNS4xLTIuMSw4LTJjMi43LDAuMSw1LjMsMCw4LDAuMWM0LjQsMC4zLDcuOCw0LjQsNy43LDguNwoJCWMwLDQtMy4yLDguMi03LjgsOC41Yy0yLjIsMC4xLTQuNCwwLjEtNi42LDAuMWMtMC42LDAtMS4zLDAtMi4yLDBjMC4zLDAuMywwLjQsMC41LDAuNSwwLjZjNC44LDIuNiw4LDYuNiwxMC4yLDExLjUKCQljMS45LDQsMyw4LjMsMy40LDEyLjZjMC4zLDMuNiwwLjUsNy4zLDAuNSwxMC45YzAuMSwxNC45LDAsMjkuNywwLDQ0LjZjMCwxLjItMC4xLDIuNS0wLjQsMy43Yy0xLDQtNC42LDYuOS04LjgsNi45CgkJYy02LjcsMC4xLTEzLjUsMC4xLTIwLjIsMGMtNS4xLDAtOS00LjEtOS4xLTkuMWMwLTEuNCwwLTIuOCwwLTQuMWMwLTAuMi0wLjEtMC41LTAuMS0wLjljLTM5LjYsNS40LTc5LjEsNS40LTExOC45LDAKCQljMCwwLjYsMCwxLjEsMCwxLjdjLTAuMSwxLjcsMCwzLjQtMC4yLDVjLTAuNyw0LjQtNC41LDcuNS04LjksNy42Yy02LjcsMC0xMy40LDAuMS0yMC4xLDBjLTUuMSwwLTktNC05LjItOS4xYzAtMC40LDAtMC44LDAtMS4yCgkJYzAtMTUuNiwwLTMxLjEsMC00Ni43YzAtNSwwLjMtMTAsMS41LTE0LjljMS4xLTQuNSwyLjktOC44LDUuOC0xMi41YzEuOC0yLjQsNC00LjMsNi43LTUuN2MwLjItMC4xLDAuMy0wLjIsMC43LTAuNQoJCWMtMC42LTAuMS0wLjktMC4xLTEuMy0wLjFjLTIuNiwwLTUuMSwwLjEtNy43LTAuMWMtNC40LTAuNC03LjctNC4xLTcuNy04LjZjLTAuMS00LjgsMy45LTguNSw3LjgtOC43YzMuMy0wLjEsNi42LTAuMSw5LjktMC4xCgkJYzIsMCwzLjgsMC43LDUuNSwxLjZjMC4zLDAuMiwwLjcsMC40LDEuMiwwLjZjMC4yLTAuNiwwLjQtMS4xLDAuNi0xLjdjMy05LDYuMS0xNy45LDktMjYuOWMyLjUtNy44LDcuNy0xMy4xLDE0LjktMTYuOAoJCUM1Mi40LDAuOCw1Ni4zLDAsNjAuNCwwYzI2LjQsMC4xLDUyLjcsMC4xLDc5LjEsMGM2LDAsMTEuMiwxLjgsMTYsNS4yYzUuMSwzLjYsOC43LDguNCwxMC43LDE0LjVjMi45LDksNiwxOCw5LDI3CgkJQzE3NS4zLDQ3LjEsMTc1LjUsNDcuNSwxNzUuNyw0OHogTTEwMCw1Ny40QzEwMCw1Ny40LDEwMCw1Ny40LDEwMCw1Ny40YzIwLjcsMCw0MS40LDAsNjIsMGMwLjUsMCwxLDAsMS41LDAKCQljMi4zLDAuMSw0LjItMS41LDMuNC00LjVjLTAuMS0wLjItMC4xLTAuNC0wLjItMC42Yy0zLjUtMTAuNC02LjktMjAuOC0xMC40LTMxLjJjLTAuMi0wLjYtMC40LTEuMS0wLjctMS42CgkJYy0zLjctNi4zLTguOS0xMC4xLTE2LjQtMTAuMWMtMjMtMC4xLTQ2LDAtNjksMGMtMy4yLDAtNi40LDAuMS05LjYsMEM1Myw5LjEsNDUuMywxNS44LDQzLjQsMjEuOGMtMy4xLDEwLjEtNi42LDIwLjEtOS45LDMwLjEKCQljLTAuMiwwLjYtMC40LDEuMi0wLjUsMS44Yy0wLjMsMS45LDAuOSwzLjQsMi44LDMuNmMwLjcsMC4xLDEuNCwwLjEsMi4xLDAuMUM1OC41LDU3LjQsNzkuMyw1Ny40LDEwMCw1Ny40eiBNMTM3LjksMTIzLjcKCQljLTguNSwwLjYtMTcsMS4yLTI1LjQsMS42Yy04LjQsMC40LTE2LjgsMC40LTI1LjIsMGMtOC40LTAuNC0xNi44LTEuMS0yNS4yLTEuN2MwLjEsNCwzLDcuMiw3LjEsNy41YzYuNCwwLjUsMTIuOSwxLDE5LjMsMS4yCgkJYzUuNywwLjIsMTEuNSwwLjMsMTcuMywwLjFjNy40LTAuMiwxNC43LTAuNiwyMi4xLTFjMS41LTAuMSwzLTAuMiw0LjQtMC41QzEzNS41LDEzMC4xLDEzOC4xLDEyNi43LDEzNy45LDEyMy43eiBNMTQuNSw5My40CgkJYzAsNi43LDUuMiwxMS45LDExLjksMTEuOWM2LjYsMCwxMi01LjMsMTItMTEuOWMtMC4xLTcuMi01LjktMTEuOS0xMi0xMS45QzE5LjgsODEuNywxNC41LDg2LjksMTQuNSw5My40eiBNMTczLjYsODEuNgoJCWMtNi42LDAtMTEuOSw1LjMtMTEuOCwxMmMwLDYuNSw1LjQsMTEuNywxMS45LDExLjhjNi4yLDAuMSwxMS45LTQuOSwxMS45LTExLjlDMTg1LjUsODYuMSwxNzkuNCw4MS40LDE3My42LDgxLjZ6Ii8+CjwvZz4KPC9zdmc+Cg=="> Open in TomTom GO</div></div>';
            document.body.appendChild(button);
        }

        // show the button with the constructed URL
        displayButton(tomtomUrl);

        // intervene google's adding classes to links to hide them nonsense
        function removeGoogleClassFromButton() {
            var tomtomGoDiv = document.querySelector('.tomtomgo');
            tomtomGoDiv.classList.remove('fp-h');
        }

        // select the node that will be observed for changes
        const LinkObserver = document.querySelector('.tomtomgo');

        // callback function to execute when mutations are observed
        const callback = function(mutationsList, observer) {
            for(let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    if (mutation.target.classList.contains('fp-h')) {
                        removeGoogleClassFromButton(); // Call the function to remove the class
                    }
                }
            }
        };

        // Create an observer instance
        const observer = new MutationObserver(callback);

        // Start observing the target node for attribute changes
        observer.observe(LinkObserver, { attributes: true });

    }
}

