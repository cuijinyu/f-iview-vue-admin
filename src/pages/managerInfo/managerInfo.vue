<template>
    <div>
        <Row>
            <Col span="12">
                <Card>
                    <p slot="title">
                        用户名:{{user.username}}
                    </p>
                    <div>
                        描述:{{user.description}}
                    </div>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
export default {
    data: () => {
        return {
            user:{

            }
        }
    },
    beforeMount() {
        let user = window.sessionStorage.getItem('user');
        this.user = JSON.parse(user).data;
    }
}
</script>

<style>

</style>


