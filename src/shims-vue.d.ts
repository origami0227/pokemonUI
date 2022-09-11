declare module '*.vue'{
    import { ComponentOptions } from "vue";
    const ComponentOptions:ComponentOptions
    export default ComponentOptions
    //让ts理解vue
}
declare module '*.md'{
    const str:string
    export default str
}