app.component('review-list', {
    props: {
        reviews: {
            type: Array,
            required: true
        }
    },
    template:
    /*html*/
    `
    <div class="review-container">
    <h3>Reviews:</h3>
    <ul>
    <li v-for=("review, index)in reviews" :key="index">
    {{ review.name }} gave this {{ review.rating }} stars
     <br/>
     "{{ review.review }}"
    </li>
    </ul>
</div>
`
,
data () {
    return {
        name: '',
        review: '',
        rating: null
    }
},
methods: {
    onSubmit() {
        if(this.name === '' || this.review === '' || this.rating === null) {
            alert('Review is incomplete. Please fill out every field.')
            return
        }

        let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating
        }
        this.$emit('review-submitted', productReview)

        this.name= '',
        this.review= '',
        this.rating=null
    }
}
})