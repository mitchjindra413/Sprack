/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    './node_modules/shadcn/ui/**/*.js',
  ],
  theme: {
  	extend: {
  		fontFamily: {
  			sans: ['Lato', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif', 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji']
  		},
  		fontWeight: {
  			thin: '100',
  			light: '300',
  			regular: '400',
  			bold: '700',
  			black: '900'
  		},
  		colors: {
  			'slack-purple': {
  				'50': '#f3e9ff',
  				'100': '#e5d3ff',
  				'200': '#d0aeff',
  				'300': '#b77eff',
  				'400': '#a356ff',
  				'500': '#611f69',
  				'600': '#4a0e4e',
  				'700': '#380a3a',
  				'800': '#2c0a2f',
  				'900': '#1e0320'
  			},
  			'slack-green': '#007a5a',
  			'slack-red': '#e01e5a',
  			'slack-yellow': '#ecb22e',
  			'slack-blue': '#2eb67d',
  			'slack-grey': {
  				'100': '#f8f8f8',
  				'200': '#e0e0e0',
  				'300': '#bdbdbd',
  				'400': '#9e9e9e',
  				'500': '#757575',
  				'600': '#616161',
  				'700': '#424242',
  				'800': '#212121',
  				'900': '#1a1a1a'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}