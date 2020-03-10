import React from 'react';

import styles from './CharacterCard.module.css';

interface Props {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
}

export default function CharacterCard({
  name,
  status,
  species,
  type,
  gender,
  image
}: Props) {
  return (
    <article className={styles.article}>
      <figure className={styles.image}>
        <img alt={name} src={image} />
      </figure>
      <article className={styles.content}>
        <header className={styles.header}>
          <h2>{name}</h2>
          <span className={styles.status}>{status}</span>
        </header>
        <p>Species: {species}</p>
        <p>Type: {type}</p>
        <p>Gender: {gender}</p>
      </article>
    </article>
  );
}
