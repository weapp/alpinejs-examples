export default function (Alpine) {
    // document.addEventListener('alpine:init', () => {
    Alpine.data('dropdown', (initialOpenState = false) => ({
        open: initialOpenState,

        toggle() {
            this.open = ! this.open
        },

        init() {
            this.$watch('open', (value) => { console.log(`dropdown is now: ${value}`) })
        },

        trigger: {
            ['@click']() {
                this.open = ! this.open
            },
        },
        dialogue: {
            ['x-show']() {
                return this.open
            },
            ['x-transition:enter.duration.250ms']() {
                return true
            },
            ['x-transition:leave.duration.800ms']() {
                return true
            },
            ['@click.outside']() {
                this.open = false
            },
        }
    }))

    Alpine.store('darkMode', {
        on: false,

        toggle() {
            this.on = ! this.on
        }
    })

    Alpine.bind('SomeButton', ({prop='counter',incr=1}={}) => ({
        type: 'button',

        '@click'() {
            this[prop] += incr
        },

        ':disabled'() {
            return incr > 0 ? this[prop] >= 5  : this[prop] <= 0
        },
        'x-text'() {
            return `${prop}${incr > 0 ? '++' : '--'}`
        },
    }))

    Alpine.directive('uppercase', el => {
        el.textContent = el.textContent.toUpperCase()
    })

    Alpine.directive('log', (el, { expression }, { evaluate, evaluateLater, effect, cleanup }) => {
        // expression === 'message'
        // console.log( evaluate(expression) )

        let getThingToLog = evaluateLater(expression)

        effect(() => {
            getThingToLog(value => {
                console.log(value)
            })
        })

        // let handler = () => {}

        // window.addEventListener('click', handler)

        // cleanup(() => {
        //     window.removeEventListener('click', handler)
        // })
    })
    // })

    Alpine.directive('message', (el, { value, modifiers, expression }) => {
        Alpine.addScopeToNode(el, Alpine.reactive({'message': expression}))
    }).before('bind')

    Alpine.magic('now', () => {
        return (new Date).toLocaleTimeString()
    })

    // Alpine.magic('clipboard', () => {
    //     return subject => navigator.clipboard.writeText(subject)
    // })

    Alpine.magic('clipboard', () => subject => {
        navigator.clipboard.writeText(subject)
    })
}