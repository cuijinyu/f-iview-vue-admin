<template>
    <div>
        <Tabs value="用户管理" :value="tabFlag">
            <TabPane label="查看所有用户" name="seeAll">
                <Table  border :columns="userListColumns" :data="userList"></Table>
            </TabPane>
            <TabPane label="新建用户" name="createUser">
                <Row>
                    <Col :span="8" :push="8">
                        <Form :model="createUserForm">
                            <FormItem label="用户名">
                                <Input v-model="createUserForm.username" placeholder="请输入用户名"></Input>
                            </FormItem>
                            <FormItem label="密码">
                                <Input type="password" v-model="createUserForm.password" placeholder="请输入密码"></Input>
                            </FormItem>
                            <FormItem>
                                <Button v-if="createLoading" type="primary" @click="createUser">新建用户</Button>
                                <Button v-else loading type="primary">新建用户</Button>
                            </FormItem>
                        </Form>
                    </Col>
                </Row>
            </TabPane>
        </Tabs>
    </div>
</template>

<script>
export default {
    data: function() {
        return {
            createLoading:true,
            userListColumns:[
                {
                    title:'用户ID',
                    key:'uid'
                },
                {
                    title:'用户账户',
                    key:'username'
                },
                {
                    title:"是否为管理员",
                    key:'isadmin'
                },
                {
                    title:"描述",
                    key:'description'
                },
                {
                        title: '操作',
                        key: 'action',
                        fixed: 'right',
                        width: 120,
                        render: (h, params) => {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'text',
                                        size: 'small'
                                    },
                                    on: {
                                        click: () => {
                                            this.deleteUser(params.row.uid);
                                        }
                                    }
                                }, '删除用户'),
                            ]);
                        }
                    }
            ],
            userList:[],
            tabFlag:'seeAll',
            createUserForm:{
                username:'',
                password:''
            }
        }
    },
    beforeMount () {
        this.getAllUser();
    },
    methods:{
        getAllUser () {
            this.$http.post('http://120.77.158.24/admin/userlist', {
                page:1,
                itemPerpage:1
            })
            .then(res => {
                this.userList = res.data.data;
            })
        },
        deleteUser (uid) {
            this.$Modal.confirm({
                title:'删除用户',
                content:'确认删除用户吗',
                onOk:() => {
                    this.$http.post('http://120.77.158.24/admin/userdel', {
                        user:uid
                    }).then(res => {
                        if (res.data.result == 1) {
                            this.$Message.success('用户删除成功');
                            this.getAllUser();
                        } else {
                            this.$Message.error(`用户删除失败,${res.data.message}`)
                        }
                    }).catch(err => {
                        this.$Message.error(`用户删除失败,网络错误`)
                    })
                },
                onCancel: () => {
                    console.log('取消了删除账户')
                }
            })
        },

        createUser () {
            this.createLoading = false;
            this.$http.post('/admin/useradd', this.createUserForm)
                .then(res => {
                    if (res.data.result == 1) {
                        this.$Message.success('用户创建成功');
                        this.createUserForm = {
                            username,
                            password
                        }
                    } else {
                        this.$Message.error(`用户创建失败,${res.data.message}`);
                    }
                    this.getAllUser();
                    this.createLoading = true;
                }).catch(err => {
                    this.createLoading = true;
                })
        }
    }
}
</script>

<style>

</style>