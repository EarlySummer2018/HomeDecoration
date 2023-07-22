import { h } from 'vue'
import './card.min.css'
interface Props {
    title: string,
    bgColor?: string,
    padding?: string
}
const Card = (props: Props, ctx:any) => {
    return h(
        'div',
        {
            class: 'card',
            style: {
                backgroundColor: props.bgColor || '#f0f2f5',
                padding: props.padding || '12px 11px'
            }
        },
        [
            props.title?h('p', {calss: 'card-title'}, props.title):'',
            ctx.slots.default()
        ],
    )
}
export default Card