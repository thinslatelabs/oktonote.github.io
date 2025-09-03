/**
 * Oktonote Logo Component for Landing Page
 * 
 * Web-compatible version of the OktonoteLogo component
 * Supports different sizes and layouts (horizontal with text, vertical with text, logo only)
 */

class OktonoteLogo {
    constructor(options = {}) {
        this.size = options.size || 32;
        this.variant = options.variant || 'horizontal';
        this.showText = options.showText !== false; // default true
        this.fontSize = options.fontSize || '1.8rem';
        this.forceDarkMode = options.forceDarkMode || false;
        this.basePath = options.basePath || './';
        
        // Detect system theme
        this.systemColorScheme = this.getSystemColorScheme();
    }
    
    getSystemColorScheme() {
        if (typeof window !== 'undefined' && window.matchMedia) {
            return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        return 'light';
    }
    
    createElement() {
        // Always use light logo for landing page
        const logoSrc = this.basePath + 'assets/images/oktonote-light.png';
        
        // Create logo image
        const logoImg = document.createElement('img');
        logoImg.src = logoSrc;
        logoImg.style.height = `${this.size}px`;
        logoImg.style.width = `${this.size}px`;
        logoImg.style.objectFit = 'contain';
        logoImg.alt = 'OktoNote Logo';
        
        // If no text or logo-only variant, return just the image
        if (!this.showText || this.variant === 'logo-only') {
            return logoImg;
        }
        
        // Create text element
        const textElement = document.createElement('span');
        textElement.textContent = 'oktonote';
        textElement.style.fontSize = this.fontSize;
        textElement.style.fontWeight = 'normal';
        textElement.style.fontFamily = '"Courier Prime", monospace';
        textElement.style.letterSpacing = '0.05em';
        textElement.style.color = 'var(--primary, #4B5EAA)';
        
        // Create container
        const container = document.createElement('div');
        container.style.display = 'flex';
        container.style.alignItems = 'center';
        container.style.textAlign = 'center';
        
        if (this.variant === 'horizontal') {
            container.style.flexDirection = 'row';
            container.style.gap = '0.5rem';
        } else if (this.variant === 'vertical') {
            container.style.flexDirection = 'column';
            container.style.gap = '0.75rem';
        }
        
        container.appendChild(logoImg);
        if (this.showText) {
            container.appendChild(textElement);
        }
        
        return container;
    }
    
    // Static method to easily create and insert logo
    static render(containerId, options = {}) {
        const container = document.getElementById(containerId);
        if (container) {
            const logo = new OktonoteLogo(options);
            const element = logo.createElement();
            container.appendChild(element);
            return element;
        }
        return null;
    }
    
    // Static method to replace text logo with image logo
    static replaceTextLogo(selector, options = {}) {
        const elements = document.querySelectorAll(selector);
        elements.forEach(element => {
            const logo = new OktonoteLogo(options);
            const logoElement = logo.createElement();
            
            // Copy any existing classes or styles
            if (element.className) {
                logoElement.className = element.className;
            }
            
            // Replace the element
            element.parentNode.replaceChild(logoElement, element);
        });
    }
}

// Export for use in modules or direct script inclusion
if (typeof module !== 'undefined' && module.exports) {
    module.exports = OktonoteLogo;
}

// Make available globally for direct script inclusion
if (typeof window !== 'undefined') {
    window.OktonoteLogo = OktonoteLogo;
}