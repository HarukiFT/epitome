const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  theme: {
    spacing: {
      none: 0,
      xxxxs: 4,
      xxxs: 6,
      xxs: 10,
      xs: 12,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 28,
      xxl: 32,
      xxxl: 40,
    },
    borderRadius: {
      xxs: 10,
      xs: 12,
      sm: 16,
      md: 20,
      lg: 24,
      xl: 32,
      full: 9999,
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      bold: 700,
      button: 500,
    },
    fontSize: {
      xs: 12,
      sm: 14,
      md: 16,
      lg: 18,
      plus: 56,
      heading1: 48,
      heading2: 40,
      heading3: 32,
      heading4: 28,
      heading5: 24,
      heading6: 18,
      button: 16,
    },
    extend: {
      height: {
        lg: 64,
        md: 54,
        sm: 42,
        xs: 36,
        input: 52,
      },
      colors: {
        bg: '#1A1A1A',
        // Основные цвета бренда (приятные красные оттенки)
        brand: {
          primary: '#C53030', // Богатый, мягкий красный
          sub: '#E57373', // Светлее для hover
          on: '#F7F7F7', // Мягкий белый для текста
        },
        // Статусные цвета
        status: {
          success: '#16A34A',
          'success-sub': '#16A34A1A',
          error: '#C53030', // Согласован с brand.primary
          'error-sub': '#C530301A', // Прозрачный для колец
          'warning-sub': '#D977061A',
        },
        // Поверхности и границы (темные, теплые нейтральные оттенки)
        surface: {
          border: '#5A5A5A', // Темно-серый с теплым оттенком
          medium: '#B0B0B0', // Средний серый для текста
          DEFAULT: '#242424', // Очень темный теплый серый
          surface: '#303030', // Чуть светлее для поверхностей
          secondary: '#3D3D3D', // Средний серый для акцентов
        },
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // Тень для элементов
      },
      boxShadow: {
        xs: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
      },
    },
  },
  plugins: [],
};
