AudioParamMap.component('review-list', {
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
})

data() {
    return {
        name: '',
        review: '',
        rating: null
    }
},
methods: {
    onSubmit() {
    if(this.name === '') 
        


        let productReview = {
            name: this.name,
            review: this.review,
            rating: this.rating
        }
        this.$emit('review-submitted', productReview)
    }
}