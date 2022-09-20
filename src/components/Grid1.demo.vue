<demo>
常规用法
</demo>
<template>
<Row style="background: #41a8cb">
  <Col></Col>
  <Col></Col>
</Row>
  <Row style="background: #30bfd5">
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
  <Row style="background: #2080a1">
    <Col></Col>
    <Col></Col>
    <Col></Col>
    <Col></Col>
  </Row>
  <Row >
    <Col :span="2" style="background: #2080a1"></Col>
    <Col :span="20" style="background: #2080a1" offset="2"></Col>
  </Row>
  <Row>
    <Col :span="4" style="background: #30bfd5"></Col>
    <Col :span="18" offset="2" style="background: #30bfd5"></Col>
  </Row>
  <Row>
    <Col :span="4" style="background: #41a8cb"></Col>
    <Col :span="8" offset="2" style="background: #41a8cb"></Col>
    <Col :span="8" offset="2" style="background: #41a8cb"></Col>
  </Row>
  <Row>
    <Col :span="4" style="background: #2080a1"></Col>
    <Col :span="4" offset="6" style="background: #2080a1"></Col>
    <Col :span="8" offset="2" style="background: #2080a1"></Col>
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