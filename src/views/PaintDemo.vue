<template>
  <!-- REQUIRED MAIN CONTAINER -->
  
  <div :style="bgColor">
   
    <div >
      <h1>Paint this background!</h1>
      <input type="color" v-model="bgColor.backgroundColor" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PaintDemo",
  data: function () {
    return {
      bgColor: {
          backgroundColor: "#00cc00"
        }
    };
  },
  
};
</script>
