<demo>
混合布局 支持偏移指定的栏数
</demo>
<template>
  <Row>
    <Col span="24" class="heavy"></Col>
  </Row>
  <Row>
    <Col span="12" class="heavy"></Col>
    <Col span="8" offset="4" class="light"></Col>
  </Row>
  <Row>
    <Col span="8" class="heavy"></Col>
    <Col span="6" offset="2" class="light"></Col>
    <Col span="4" offset="4" class="heavy"></Col>
  </Row>
  <Row>
    <Col span="6" class="heavy"></Col>
    <Col span="2" offset="4" class="light"></Col>
    <Col span="3" offset="3" class="heavy"></Col>
    <Col span="6" class="light"></Col>
  </Row>
  <Row>
    <Col span="4" class="heavy"></Col>
    <Col span="12" offset="4" class="light"></Col>
    <Col span="4" class="heavy"></Col>
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

.heavy {
  background: #7ea0a6;
  border-radius: 4px;
}
.light{
  background: #e5e9f2;
  border-radius: 4px;
}
</style>