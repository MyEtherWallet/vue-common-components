<template>
  <div class="mx-auto max-w-[1400px] py-[140px]">
    <MewHeader :curr-project="PROJECTS.BLOG" :bg-visible="true" :link-component="RouterLink" :user-consent="userConsent"
      @update:consent="onUserConsentChange" :amplitude="{ track }" />
    <MEWSubscribe v-model="openSubscirbe" :curr-project="PROJECTS.BLOG" :amplitude="{ track }" project-id="test"
      class="m-5" />
    <p class="m-5">
      Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Feugiat scelerisque varius morbi enim nunc
      faucibus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Elementum sagittis vitae
      et leo duis. At tellus at urna condimentum mattis pellentesque id nibh tortor. Quam vulputate dignissim
      suspendisse in est ante in nibh. Quis risus sed vulputate odio. Imperdiet massa tincidunt nunc pulvinar sapien et
      ligula ullamcorper malesuada. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ornare suspendisse sed
      nisi lacus sed viverra tellus. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. At augue eget arcu
      dictum varius duis at consectetur lorem. In nibh mauris cursus mattis molestie. Sed velit dignissim sodales ut eu
      sem integer vitae. Mattis rhoncus urna neque viverra. Consectetur adipiscing elit duis tristique sollicitudin nibh
      sit amet. Blandit volutpat maecenas volutpat blandit aliquam. Sit amet consectetur adipiscing elit. Morbi non arcu
      risus quis varius quam quisque id.

      Faucibus a pellentesque sit amet porttitor eget dolor morbi. Nunc non blandit massa enim nec dui nunc mattis. Enim
      sed faucibus turpis in eu mi bibendum neque. Et netus et malesuada fames. Scelerisque fermentum dui faucibus in
      ornare quam. Egestas integer eget aliquet nibh praesent tristique magna. Aliquam etiam erat velit scelerisque in
      dictum non consectetur a. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Et netus et
      malesuada fames ac turpis. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque elit. Nullam ac
      tortor vitae purus faucibus ornare suspendisse sed. Amet tellus cras adipiscing enim eu turpis egestas pretium.
      Quis commodo odio aenean sed. Elementum tempus egestas sed sed risus. Facilisis sed odio morbi quis commodo. Fames
      ac turpis egestas sed tempus urna.

      Vivamus arcu felis bibendum ut. Odio eu feugiat pretium nibh ipsum consequat nisl. Netus et malesuada fames ac
      turpis egestas. Eget duis at tellus at urna. In hac habitasse platea dictumst vestibulum rhoncus est. Odio
      pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit euismod in pellentesque massa placerat
      duis ultricies lacus. Dui ut ornare lectus sit amet. Praesent semper feugiat nibh sed pulvinar proin gravida. Nunc
      sed id semper risus in hendrerit gravida. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas.
      Vel pretium lectus quam id. Vel eros donec ac odio tempor orci dapibus ultrices. Ut aliquam purus sit amet luctus
      venenatis. Vitae justo eget magna fermentum iaculis eu non.

      Molestie at elementum eu facilisis sed odio. Et malesuada fames ac turpis egestas integer eget aliquet. Tellus
      integer feugiat scelerisque varius morbi enim nunc faucibus. Quis ipsum suspendisse ultrices gravida dictum fusce
      ut placerat orci. Eros in cursus turpis massa tincidunt. Tellus mauris a diam maecenas sed enim. Ac feugiat sed
      lectus vestibulum mattis ullamcorper. Id porta nibh venenatis cras sed felis eget velit. Ultricies tristique nulla
      aliquet enim tortor at auctor urna nunc. Dictum at tempor commodo ullamcorper a. Cursus mattis molestie a iaculis.
      Arcu dictum varius duis at consectetur lorem donec massa. Maecenas sed enim ut sem viverra. Gravida in fermentum
      et sollicitudin ac orci phasellus egestas. Tristique et egestas quis ipsum suspendisse.

      Cras adipiscing enim eu turpis egestas pretium. Nibh venenatis cras sed felis eget velit aliquet sagittis.
      Pharetra massa massa ultricies mi quis. Sit amet porttitor eget dolor morbi non arcu. At auctor urna nunc id
      cursus metus aliquam. Iaculis urna id volutpat lacus laoreet non. Felis donec et odio pellentesque diam. Ac turpis
      egestas integer eget aliquet nibh praesent tristique magna. Massa sed elementum tempus egestas. Nunc mattis enim
      ut tellus. Et leo duis ut diam quam nulla porttitor massa. Ut placerat orci nulla pellentesque dignissim enim sit
      amet venenatis. Diam sit amet nisl suscipit adipiscing bibendum est. Metus dictum at tempor commodo ullamcorper a
      lacus vestibulum. Congue nisi vitae suscipit tellus mauris. Augue ut lectus arcu bibendum at. Iaculis urna id
      volutpat lacus laoreet non curabitur.
      <br />
      Etiam tempor orci eu lobortis elementum nibh tellus molestie nunc. Feugiat scelerisque varius morbi enim nunc
      faucibus. Nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum. Elementum sagittis vitae
      et leo duis. At tellus at urna condimentum mattis pellentesque id nibh tortor. Quam vulputate dignissim
      suspendisse in est ante in nibh. Quis risus sed vulputate odio. Imperdiet massa tincidunt nunc pulvinar sapien et
      ligula ullamcorper malesuada. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Ornare suspendisse sed
      nisi lacus sed viverra tellus. Nunc scelerisque viverra mauris in aliquam sem fringilla ut. At augue eget arcu
      dictum varius duis at consectetur lorem. In nibh mauris cursus mattis molestie. Sed velit dignissim sodales ut eu
      sem integer vitae. Mattis rhoncus urna neque viverra. Consectetur adipiscing elit duis tristique sollicitudin nibh
      sit amet. Blandit volutpat maecenas volutpat blandit aliquam. Sit amet consectetur adipiscing elit. Morbi non arcu
      risus quis varius quam quisque id.


      Vivamus arcu felis bibendum ut. Odio eu feugiat pretium nibh ipsum consequat nisl. Netus et malesuada fames ac
      turpis egestas. Eget duis at tellus at urna. In hac habitasse platea dictumst vestibulum rhoncus est. Odio
      pellentesque diam volutpat commodo sed egestas egestas fringilla. Velit euismod in pellentesque massa placerat
      duis ultricies lacus. Dui ut ornare lectus sit amet. Praesent semper feugiat nibh sed pulvinar proin gravida. Nunc
      sed id semper risus in hendrerit gravida. Ultricies leo integer malesuada nunc vel risus commodo viverra maecenas.
      Vel pretium lectus quam id. Vel eros donec ac odio tempor orci dapibus ultrices. Ut aliquam purus sit amet luctus
      venenatis. Vitae justo eget magna fermentum iaculis eu non.

      Molestie at elementum eu facilisis sed odio. Et malesuada fames ac turpis egestas integer eget aliquet. Tellus
      integer feugiat scelerisque varius morbi enim nunc faucibus. Quis ipsum suspendisse ultrices gravida dictum fusce
      ut placerat orci. Eros in cursus turpis massa tincidunt. Tellus mauris a diam maecenas sed enim. Ac feugiat sed
      lectus vestibulum mattis ullamcorper. Id porta nibh venenatis cras sed felis eget velit. Ultricies tristique nulla
      aliquet enim tortor at auctor urna nunc. Dictum at tempor commodo ullamcorper a. Cursus mattis molestie a iaculis.
      Arcu dictum varius duis at consectetur lorem donec massa. Maecenas sed enim ut sem viverra. Gravida in fermentum
      et sollicitudin ac orci phasellus egestas. Tristique et egestas quis ipsum suspendisse.

      Cras adipiscing enim eu turpis egestas pretium. Nibh venenatis cras sed felis eget velit aliquet sagittis.
      Pharetra massa massa ultricies mi quis. Sit amet porttitor eget dolor morbi non arcu. At auctor urna nunc id
      cursus metus aliquam. Iaculis urna id volutpat lacus laoreet non. Felis donec et odio pellentesque diam. Ac turpis
      egestas integer eget aliquet nibh praesent tristique magna. Massa sed elementum tempus egestas. Nunc mattis enim
      ut tellus. Et leo duis ut diam quam nulla porttitor massa. Ut placerat orci nulla pellentesque dignissim enim sit
      amet venenatis. Diam sit amet nisl suscipit adipiscing bibendum est. Metus dictum at tempor commodo ullamcorper a
      lacus vestibulum. Congue nisi vitae suscipit tellus mauris. Augue ut lectus arcu bibendum at. Iaculis urna id
      volutpat lacus laoreet non curabitur.

      Morbi tristique senectus et netus. Non quam lacus suspendisse faucibus interdum posuere. Quam lacus suspendisse
      faucibus interdum posuere lorem ipsum dolor. Velit euismod in pellentesque massa placerat duis. Elementum
      curabitur vitae nunc sed velit dignissim sodales ut eu. Diam sollicitudin tempor id eu nisl nunc. Quis enim
      lobortis scelerisque fermentum dui. Mus mauris vitae ultricies leo integer malesuada. Ullamcorper sit amet risus
      nullam eget. Pellentesque nec nam aliquam sem et tortor. Enim neque volutpat ac tincidunt vitae semper quis
      lectus. Mi sit amet mauris commodo quis imperdiet massa tincidunt nunc. Nibh cras pulvinar mattis nunc sed
      blandit. Tristique senectus et netus et malesuada fames ac turpis egestas. Posuere sollicitudin aliquam ultrices
      sagittis orci. Donec massa sapien faucibus et molestie ac feugiat sed.
    </p>
    <MewFooter :curr-project="PROJECTS.PORTFOLIO" packageVersion="3.4.5" :link-component="RouterLink"
      :amplitude="{ track: () => { } }" :user-consent="userConsent" @update:consent="onUserConsentChange" />
  </div>

</template>

<script setup lang="ts">
import { ref } from "vue";
import { MewHeader, MewFooter, MEWSubscribe } from "./libs/main";
import { RouterLink } from "vue-router";
import { PROJECTS } from "@/helpers/links";

const userConsent = ref(false);
const onUserConsentChange = (newval: boolean) => {
  userConsent.value = newval;
};
const track = () => {
  console.log("Tracking");
}

const openSubscirbe = ref(false)
</script>
