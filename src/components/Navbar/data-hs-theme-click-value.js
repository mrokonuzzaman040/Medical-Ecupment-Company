const HSThemeAppearance = {
    init() {
        const defaultTheme = 'default'
        let theme = localStorage.getItem( 'hs_theme' ) || defaultTheme

        const htmlElement = document.querySelector( 'html' );
        if (htmlElement && htmlElement.classList.contains( 'dark' )) return;
        this.setAppearance( theme )
    },
    _resetStylesOnLoad() {
        const $resetStyles = document.createElement( 'style' )
        $resetStyles.innerText = `*{transition: unset !important;}`
        $resetStyles.setAttribute( 'data-hs-appearance-onload-styles', '' )
        document.head.appendChild( $resetStyles )
        return $resetStyles
    },
    setAppearance( theme, saveInStore = true, dispatchEvent = true ) {
        const $resetStylesEl = this._resetStylesOnLoad()

        const htmlElement = document.querySelector('html');
        if (htmlElement) {
            htmlElement.classList.remove('dark');
            htmlElement.classList.remove('default');
            htmlElement.classList.remove('auto');
            htmlElement.classList.add(this.getOriginalAppearance());
        }

        setTimeout( () => {
            $resetStylesEl.remove()
        } )

        if ( dispatchEvent ) {
            window.dispatchEvent( new CustomEvent( 'on-hs-appearance-change', { detail: theme } ) )
        }
    },
    getAppearance() {
        let theme = this.getOriginalAppearance()
        if ( theme === 'auto' ) {
            theme = window.matchMedia( '(prefers-color-scheme: dark)' ).matches ? 'dark' : 'default'
        }
        return theme
    },
    getOriginalAppearance() {
        const defaultTheme = 'default'
        return localStorage.getItem( 'hs_theme' ) || defaultTheme
    }
}
HSThemeAppearance.init()

window.matchMedia( '(prefers-color-scheme: dark)' ).addEventListener( 'change', e => {
    if ( HSThemeAppearance.getOriginalAppearance() === 'auto' ) {
        HSThemeAppearance.setAppearance( 'auto', false )
    }
} )

window.addEventListener( 'load', () => {
    const $clickableThemes = document.querySelectorAll( '[data-hs-theme-click-value]' )
    const $switchableThemes = document.querySelectorAll( '[data-hs-theme-switch]' )

    $clickableThemes.forEach($item => {
        $item.addEventListener('click', () => HSThemeAppearance.setAppearance($item.getAttribute('data-hs-theme-click-value'), true, true));
    });

    $switchableThemes.forEach(($item) => {
        if ($item instanceof HTMLInputElement) {
            $item.addEventListener('change', (e) => {
                if (e.target instanceof HTMLInputElement) {
                    HSThemeAppearance.setAppearance(e.target.checked ? 'dark' : 'default');
                }
            });

            $item.checked = HSThemeAppearance.getAppearance() === 'dark';
        }
    });

    // window.addEventListener('on-hs-appearance-change', (e) => {
    //     $switchableThemes.forEach(($item) => {
    //         if ($item instanceof HTMLInputElement) {
    //             $item.checked = e.detail === 'dark';
    //         }
    //     });
    // });
} )