import client from './client'

const endpoint = "/listings"

const getListings = () => client.get(endpoint)

const addListings = (listing, onUploadProgress) => {
    const data = new FormData()
    data.append('title', listing.title)
    data.append('price', Number(listing.price))
    data.append('categoryId', listing.category.value)
    data.append('description', listing.description)
    
    listing.images.forEach((uri, index) => 
        data.append('images', {
        uri,
        type: 'image/jpeg',
        name: 'image' + index,
        })
    )
    
    if(listing.location){
        data.append('location', JSON.stringify(listing.location))
    }

    
    return client.post(endpoint, data, {
        onUploadProgress: (progress) => 
            onUploadProgress(progress.loaded/progress.total)
    })
}


export default {
    getListings,
    addListings
}