<template>
  <div>
    <div class="container">
        <div>
            
        </div>
      <div
        class="d-flex justify-content-center"
        v-for="items in users"
        :key="items.postID"
      >
        <div class="p-4 set" v-for="image in items.images" :key="image">
          <img id="imageSize" :src="image" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fav: true,
      users: [
        {
          postID: 1,
          images: [
            "https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1426604966848-d7adac402bff?w=500&h=500&fit=crop",
          ],
        },
        {
          postID: 2,
          images: [
            "https://images.unsplash.com/photo-1502630859934-b3b41d18206c?w=500&h=500&fit=crop",
            "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aHVtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
          ],
        },
      ],
    };
  },
};
</script>

<style scoped>
#imageSize {
  position: relative;
  width: 25vw;
  height: 50vh;
}

@media (max-width: 1000px) {
  #imageSize {
    height: 40vh;
  }
}

@media (max-width: 850px) {
  #imageSize {
    height: 30vh;
  }
}

@media (max-width: 600px) {
  #imageSize {
    height: 20vh;
  }
}
</style>