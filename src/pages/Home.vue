<template>
  <div class="layout">
    <Layout>
      <Header>
        <div class="ws-app__header-logo">
          尊敬的 {{userName}}你好
          <a @click="logout">登出</a>
        </div>
      </Header>
      <Layout class="body">
        <Sider>
          <Menu
            :active-name="activeItem"
            @on-select="pushRouter"
            theme="light"
            width="auto"
            :open-names="openSubMenu"
          >
            <Submenu v-for="i in menus" :name="i.name">
              <template slot="title">
                <Icon v-if="i.icon" :type="i.icon"/>
                {{i.title}}
              </template>
              <MenuItem v-for="j in i.children" :name="j.name">
                <Icon v-if="j.icon" :type="j.icon"/>
                {{j.title}}
              </MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout>
          <Breadcrumb :style="{margin: '24px 10px'}">
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>{{openMenu}}</BreadcrumbItem>
            <BreadcrumbItem>{{selectItem}}</BreadcrumbItem>
          </Breadcrumb>
          <Content>
            <router-view :style="{margin: '10px 10px'}"/>
          </Content>
        </Layout>
      </Layout>

      <Footer>
        <div class="footer_copy">
          <p>我的项目@2018</p>
        </div>
      </Footer>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userName: "管理员",
      openSubMenu: ["管理员"],
      activeItem: "managerInfo",
      openMenu: "",
      selectItem: "",
      user: {},
      // menu对象，一级对象为Submenu，二级对象为item
      menus: [
        {
          name: "管理员",
          title: "系统管理",
          icon: "ios-book-outline",
          children: [
            {
              title: "管理员信息",
              name: "managerInfo"
            },
            {
              title: "用户管理",
              name: "userManage"
            },
            {
              title: "项目管理",
              name: "projectManage"
            }
          ]
        },
        {
          name: "用户",
          title: "用户管理",
          children: [
            {
              title: "用户信息",
              name: "userInfo"
            }
          ]
        }
      ]
    };
  },
  methods: {
    pushRouter(path) {
      let flag;
      for (let i of this.menus) {
        flag = i.title;
        for (let j of i.children) {
          if (j.name == path) {
            this.selectItem = j.title;
            this.openMenu = flag;
          }
        }
      }
      this.$router.push(path);
    },

    logout() {
      this.$http
        .post("/user/logout")
        .then(res => {
          window.sessionStorage.removeItem("user");
          this.$router.push("/login");
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  beforeMount() {
    this.user = JSON.parse(window.sessionStorage.getItem("user")).data;
  },
  mounted() {}
};
</script>

<style>
.footer_copy {
  text-align: center;
}
.ws-app__header-logo {
  float: right;
  color: white;
}
.body {
  min-height: 800px;
}
</style>


