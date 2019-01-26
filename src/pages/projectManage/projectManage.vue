<template>
    <div>
        <Tabs value="项目管理" :value="tabFlag">
            <TabPane label="查看所有项目" name="seeAll">

            </TabPane>
            <TabPane label="新建项目" name="createProject">标签二的内容</TabPane>
        </Tabs>
    </div>
</template>

<script>
export default {
        data: () => {
        return {
            projectList:[],
            tabFlag:'seeAll'
        }
    },
    beforeMount () {
        this.$http.post('http://120.77.158.24/admin/projectlist', {
            page:1,
            itemPerpage:1
        })
        .then(res => {
            this.projectList = res.data.data;
        }).catch(err => {
            console.log(err)
        })
    }
}
</script>

<style>

</style>


