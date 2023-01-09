/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Don\'t Hate, Curate.',
    image: './img/curate.svg',
    description: (
      <>
        Browse, search, discover your comic book library that you have so proudly built from scratch.
      </>
    ),
  },
  {
    title: 'No Fuss DC++',
    image: './img/dcpp.svg',
    description: (
      <>
        With first-class support for the excellent <code>AirDC++</code>, find and acquire hidden gems.
      </>
    ),
  },
  {
    title: 'Shine with Comic Vine',
    image: './img/cv.svg',
    description: (
      <>
        Scrape Comic Vine's exhaustive comic book database to analyze and clean up your library's metadata.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureSvg} alt={title} src={image} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
