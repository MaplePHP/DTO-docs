import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import SearchModal from '../components/SearchModal';

import Heading from '@theme/Heading';
import styles from './index.module.css';
import React, {useState} from "react";
import SearchShortcutKeys from "../components/SearchShortcutKeys";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className={clsx('hero', styles.heroBanner)}>
        <div className="container">
          <h1 className={"hero__title"}>{siteConfig.title}</h1>
          <p className="hero__subtitle">DTO (Darn Tidy Object) isn’t just another data wrapper – it’s a full-featured utility toolkit for PHP that makes structured data clean, fluent, and a joy to work with. Say goodbye to messy arrays, repetitive isset() checks, and clunky transformations. With DTO, your data becomes smart, expressive, and beautifully maintainable.</p>
          <div className={styles.buttons}>
            <button className={"inp-button inp-button--invert"} onClick={() => setOpen(true)}>
              <span>Search docs</span>
              <SearchShortcutKeys className={"ml-auto"}/>
            </button>
          </div>
        </div>
      </header>

      <SearchModal isOpen={open} onClose={() => setOpen(false)}/>
    </>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
