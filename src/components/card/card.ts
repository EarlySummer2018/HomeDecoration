import { h } from 'vue'
import './card.min.css'
interface Props {
    title: string
}
const Card = (props: Props, ctx:any) => {
    return h(
        'div',
        {
            class: 'card'
        },
        [
            h('p', {calss: 'card-title'}, props.title),
            ctx.slots.default()
        ],
    )
}
export default Card