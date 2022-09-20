<demo>
示例
</demo>
<template>
<Row>
  <Col></Col>
  <Col></Col>
</Row>
  <Row>
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
  <Row>
    <Col></Col>
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
  <Row>
    <Col :span="2"></Col>
    <Col :span="22"></Col>
  </Row>
  <Row>
    <Col :span="4"></Col>
    <Col :span="20"></Col>
  </Row>
</template>
<script>
import Col from '../lib/Col.vue'
import Row from '../lib/Row.vue'
export default {
  components: {Col,Row}
}
</script>
<style lang="scss">

</style>