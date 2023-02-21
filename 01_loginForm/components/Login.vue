<template>
  <div class="login-body">
    <div class="common-layout" style="margin-top: 10%">
      <el-header class="login-header">
        <el-select v-model="locale">
          <el-option label="英語" value="en" />
          <el-option label="日本語" value="ja" />
        </el-select>
        <el-row>
          <el-col>{{ t("title.login") }}</el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-form ref="userRef" :model="user" :rules="rules" class="login-form">
          <el-form-item label="" prop="username">
            <el-input
              type="text"
              v-model="user.username"
              :placeholder="t('label.username')"
            />
          </el-form-item>
          <el-form-item label="" prop="email">
            <el-input v-model="user.email" :placeholder="t('label.email')" />
          </el-form-item>
          <el-form-item label="" prop="password">
            <el-input
              type="password"
              v-model="user.password"
              :placeholder="t('label.password')"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="handleSubmit(userRef)">{{
              t("button.login")
            }}</el-button>
            <el-button @click="handleReset(userRef)">{{
              t("button.reset")
            }}</el-button>
          </el-form-item>
        </el-form>
      </el-main>
    </div>
  </div>
</template>
<script lang="ts">
import { reactive, ref } from "vue";
import type, { FormInstance, FormRules } from "element-plus";
import { useI18n } from "vue-i18n";
export default {
  name: "Login",
  setup() {
    const { t, locale } = useI18n();
    const userRef = ref<FormInstance>();
    const rules = reactive<FormRules>({
      username: [
        { required: true, message: "user name is required", trigger: "blur" },
        {
          min: 4,
          max: 12,
          message: "length should be 4 to 12",
          trigger: "blur",
        },
      ],
      password: [
        { required: true, message: "password is required", trigger: "blur" },
        {
          min: 4,
          max: 12,
          message: "length should be 4 to 12",
          trigger: "blur",
        },
      ],

      email: [
        { required: true, message: "e-mail is required", trigger: "blur" },
        {
          pattern:
            /^[a-zA-Z0-9_.+-]+@([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]*\.)+[a-zA-Z]{2,}$/,
          message: "Please input correct mail address!",
          trigger: "blur",
        },
      ],
    });
    const user = reactive({
      username: "",
      email: "",
      password: "",
    });
    const handleSubmit = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          console.log("submit");
        } else {
          console.log("error", fields);
        }
      });
    };

    const handleReset = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      formEl.resetFields();
    };
    return { user, userRef, rules, handleSubmit, handleReset, t, locale };
  },
};
</script>
<style>
.login-body {
  display: flex;
  /* flex-flow: column; */
  align-items: center;
  justify-content: center;
}
.el-header {
  margin-bottom: 50px;
}
.login-form {
  display: flex;
  /* justify-content: center; */
  flex-flow: column;
  justify-content: space-evenly;
  width: 500px;
  height: 300px;
  /* border: solid 1px grey; */
  /* border-radius: 10px; */
  padding: 30px;
  border-radius: 3px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35);
  background-color: whitesmoke;
}
.el-input {
  /* width: 300px; */
  height: 50px;
  margin-top: 20px;
  /* border-radius: 10px; */
}
</style>
