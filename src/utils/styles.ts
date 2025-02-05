interface StyleColor {
  border: string;
  badge: string;
  text: string;
  bg: string;
}

export const getStyleColor = (style: string): StyleColor => {
  const styleMap: { [key: string]: StyleColor } = {
    'Modern': {
      border: 'border-modern-DEFAULT',
      badge: 'bg-modern-light text-modern-dark',
      text: 'text-modern-DEFAULT',
      bg: 'bg-modern-DEFAULT'
    },
    'Contemporary': {
      border: 'border-modern-DEFAULT',
      badge: 'bg-modern-light text-modern-dark',
      text: 'text-modern-DEFAULT',
      bg: 'bg-modern-DEFAULT'
    },
    'Scandinavian': {
      border: 'border-scandinavian-DEFAULT',
      badge: 'bg-scandinavian-light text-scandinavian-dark',
      text: 'text-scandinavian-DEFAULT',
      bg: 'bg-scandinavian-DEFAULT'
    },
    'Industrial': {
      border: 'border-industrial-DEFAULT',
      badge: 'bg-industrial-light text-industrial-dark',
      text: 'text-industrial-DEFAULT',
      bg: 'bg-industrial-DEFAULT'
    },
    'Bohemian': {
      border: 'border-bohemian-DEFAULT',
      badge: 'bg-bohemian-light text-bohemian-dark',
      text: 'text-bohemian-DEFAULT',
      bg: 'bg-bohemian-DEFAULT'
    },
    'Minimalist': {
      border: 'border-minimalist-DEFAULT',
      badge: 'bg-minimalist-light text-minimalist-dark',
      text: 'text-minimalist-DEFAULT',
      bg: 'bg-minimalist-DEFAULT'
    },
    'Traditional': {
      border: 'border-traditional-DEFAULT',
      badge: 'bg-traditional-light text-traditional-dark',
      text: 'text-traditional-DEFAULT',
      bg: 'bg-traditional-DEFAULT'
    }
  };

  return styleMap[style] || {
    border: 'border-gray-200',
    badge: 'bg-gray-100 text-gray-700',
    text: 'text-gray-600',
    bg: 'bg-gray-100'
  };
};