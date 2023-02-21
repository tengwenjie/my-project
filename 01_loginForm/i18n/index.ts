// import VueI18n from "vue-i18n";
import { createI18n } from "vue-i18n";

const messages = {
  en: {
    menu: {
      home: "HOME",
      about: "ABOUT",
      article: "ARTICLE",
    },
    title: {
      header: "HEADER",
      login: "Login",
    },
    validation: {
      userNameRequired: "Please input user ID!",
      userNameLength: "Length should be 4 to 12!",
      EmailRequired: "Please input Email!",
      EmailFomatter: "Please input correct mail address!",
      passwordRequired: "Please input passowrd!",
      passwordLength: "Length should be 4 to 12",
    },
    button: {
      login: "Login",
      reset: "Reset",
    },
    label: {
      username: "User Name",
      password: "Passowrd",
      email: "E-mail",
    },
  },
  ja: {
    menu: {
      home: "ホーム",
      about: "関連",
      article: "記事",
    },
    title: {
      header: "ヘッダー",
      login: "ログイン",
    },
    validation: {
      userNameRequired: "ユーザーIDが必須!",
      userNameLength: "4から12まで入力してください!",
      EmailRequired: "メールが必須!",
      EmailFomatter: "正しいメールアドレスを入力してください!",
      passwordRequired: "パスワードが必須!",
      passwordLength: "4から12まで入力してください!",
    },
    button: {
      login: "ログイン",
      reset: "リセット",
    },
    label: {
      username: "ユーザー名",
      password: "パスワード",
      email: "メールアドレス",
    },
  },
};

const i18n = createI18n({
  legacy: false,
  locale: "ja",
  fallbackLocale: "en",
  messages,
});

export default i18n;
