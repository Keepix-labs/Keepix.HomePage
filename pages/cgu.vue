<template>
  <Default>
    <Heading small="Terms" strong="of sales" />
    <div class="intro" data-reveal>
      <p>"<i>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim tempore quam, ratione, eaque temporibus accusamus cum totam aut fugiat architecto doloremque corrupti dolor quae ipsum, quos similique distinctio! Optio, impedit!</i>"</p>
      <p><time>Last update 10 October 2023</time></p>
    </div>
    <hr>
    <template v-for="i in 10">
      <h2 class="h2" data-reveal>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
      <div class="intro" data-reveal>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur vel ipsam unde molestiae voluptatum. Accusantium fugiat vel quasi error libero iste fugit minima labore tempore amet, repellat praesentium at officia?</p>
      </div>
      <div class="paragraphe" data-reveal>
        <p v-for="i in 3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas laborum totam iste debitis non illum distinctio, tempora quam! Eius minus sit sint vitae velit pariatur aspernatur explicabo quasi ullam voluptate. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus molestias, corrupti dolore et deleniti ratione commodi nostrum veritatis eos quibusdam harum amet sit est fugiat eaque magnam recusandae aspernatur qui!</p>
      </div>
    </template>
  </Default>
</template>