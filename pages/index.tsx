import classNames from "classnames";
import type { NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTheme } from "next-themes";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import i18nConfig from "../next-i18next.config";
import About from "../sections/About/About";
import Contact from "../sections/Contact/Contact";
import Hero from "../sections/Hero/Hero";
import Skills from "../sections/Skills/Skills";
import FadeInSection from "../utils/FadeInSection";
import styles from "./index.module.css";

const Home: NextPage = () => {
  const [formSuccess, setformSuccess] = useState(0);
  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("common");
  useEffect(() => {
    if (formSuccess) {
      setTimeout(() => {
        setformSuccess(0);
      }, 2500);
    }
  });
  return (
    <>
      <Head>
        <title>{t("title")}</title>
        <meta name="description" content={t("meta-desc")} />
        <meta property="og:title" content={t("meta-title")} />
        <meta property="og:url" content={t("meta-url")} />
        <meta property="og:description" content={t("meta-og-desc")} />
        <meta property="og:image:width" content="1080" />
        <meta property="og:image:height" content="1080" />
        <meta
          property="og:image:secure_url"
          content="https://raw.githubusercontent.com/ismailinico/nico.ismaili.de/main/public/images/social.jpg"
        />
        <meta property="og:image:alt" content={t("")} />
      </Head>
      <div
        className={classNames(
          styles.formSuccess,
          { "-translate-y-14": formSuccess === 0 },
          { "translate-y-0": formSuccess === 1 || formSuccess === -1 },
          { "bg-primary dark:bg-primary_dark": formSuccess === 1 },
          { "bg-danger dark:bg-danger_dark": formSuccess === -1 }
        )}
      >
        <span>{formSuccess === 1 ? t("form-success") : t("form-error")}</span>
      </div>
      <NavBar onThemeChange={setTheme} theme={theme} />
      <main className={styles.sectionsWrapper}>
        <section id="home" style={{ justifyContent: "start" }}>
          <Hero />
        </section>
        <FadeInSection id="about">
          <About />
        </FadeInSection>
        <FadeInSection>
          <div>
            <h2>
              <span
                dangerouslySetInnerHTML={{ __html: t("timeline-intro") }}
              ></span>
            </h2>
          </div>
        </FadeInSection>
        <FadeInSection style={{ justifyContent: "start" }}>
          <div className={styles.introSkills}>
            <h2>
              <span
                dangerouslySetInnerHTML={{ __html: t("skills-intro") }}
              ></span>
            </h2>
            <p>{t("skills-intro-p")}</p>
          </div>
        </FadeInSection>
        <Skills />
        <FadeInSection id="contact">
          <Contact
            onFormSubmit={(newValue: number) => {
              setformSuccess(newValue);
            }}
          />
        </FadeInSection>
      </main>
    </>
  );
};

/**
 *
 * @param {string} locale
 * @return {React.ReactNode}
 */
export async function getStaticProps({ locale }: { locale: any }) {
  return {
    props: {
      ...(await serverSideTranslations(
        locale,
        ["common", "nav", "hero", "about", "contact"],
        i18nConfig
      )),
    },
  };
}

export default Home;
