import React from 'react';
import Icon from '../../Icon';

const actions_dictionary = [
  {
    icon: 'add_circle_outline',
    description: 'Minha Lista'
  },
  {
    icon: 'sentiment_very_satisfied',
    description: 'Avaliar'
  },
  {
    icon: 'adjust',
    description: 'Gravar'
  },
  {
    icon: 'share',
    description: 'Compartilhar'
  }
];

const Actions = () => (
  <section className="action-wrapper">
    {actions_dictionary.map(({ icon, description }, index) => (
      <div className="action-component" key={`icon-${index}`}>
        <Icon target_class={`action-icon ${icon}`} icon={icon} />
        <p className="action-title">{description}</p>
      </div>
    ))}
  </section>
);

export default Actions;
