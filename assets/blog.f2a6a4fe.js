import{_ as A}from"./DemoLinks.09b4b6cb.js";import{_ as y,a as x}from"./DemoTitle.63799a9a.js";import{D as z}from"./DocumentationFooter.3fc21694.js";import{_ as v,a as b}from"./PrismCode.424bb1bc.js";import{_ as w}from"./DemoProps.vue_vue_type_script_setup_true_lang.6fb7fa21.js";import{b as m,o as h,e as c,f as e,w as o,u as t,F as k,j as i,E as _,G as V}from"./index.4498c4e2.js";import{_ as T}from"./BlogGrid.6314ebb5.js";import{d as M,a as B,r as F,b as D}from"./index.d8bfc051.js";import{_ as S}from"./ResourceGrid.568248d5.js";import"./vue-scrollto.3478456d.js";import"./_commonjsHelpers.712cc82f.js";import"./vue.runtime.esm-bundler.5e5a08c0.js";import"./SimpleTableHeader.2e6cfa8e.js";import"./AvatarSimple.57c1e629.js";import"./Tags.vue_vue_type_script_setup_true_lang.835dc1b9.js";import"./Tag.75316ce2.js";const j={props:[{name:"posts",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"20",values:["number"]},{name:"upsideDown",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},P=`
<script setup lang="ts">
import { posts } from '/@src/data/pages/blog'
<\/script>

<template>
  <BlogGrid :posts="posts" :limit="3" upside-down />
</template>
`,J=`
export const posts = [
  {
    id: 0,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'How to Conduct an Amazon Competitor Analysis',
    abstract:
      'Selling on Amazon is a battle you are constantly fighting, both when it comes to managing your own operations...',
    views: '1.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 1,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'How to Request Reviews on Amazon (Safely)',
    abstract:
      'Reviews are integral to the success of your ecommerce business, particularly if you sell on Amazon. Online...',
    views: '1.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 2,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'How Amazon Supply Chain Works',
    abstract:
      'Whether you\u2019re a larger or smaller company looking to scale your online operations, Amazon is a...',
    views: '1.2k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 3,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Amazon Sponsored Display Ads: A Full-Funnel Approach',
    abstract:
      'A full-funnel of self-service ads for Amazon sellers and brands is made up of Sponsored  Products...',
    views: '1.4k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 4,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Expanding Your Ecommerce Business Internationally',
    abstract:
      'I had a great talk with Ryan Cramer, fellow-of-all trades at PingPong. PingPong offers solutions for...',
    views: '1.6k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 5,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Advanced Accounting Tips to Grow Profits For Your Brand',
    abstract:
      'Cyndi Thomason, founder of bookskeep and best-selling author of Profit First For Ecommerce Sellers, joined...',
    views: '2.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 6,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Are My Walmart Listings Ready for Advertising?',
    abstract:
      'My team and I have the privilege of working with many sellers who are new to advertising on Walmart or...',
    views: '2.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 7,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Seven Ways To Increase Your Amazon Sales In 2022',
    abstract:
      'In 2022, ecommerce is thriving like never before, and Amazon is the leading marketplace. If you\u2019re...',
    views: '2.4k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 8,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Walmart Advertising: The Definitive Guide',
    abstract:
      'Prefer to save or print this information and take it with you? Download the ebook version. 1. What is...',
    views: '3.2k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 9,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Seven Ways To Increase Your Amazon Sales In 2022',
    abstract:
      'In 2022, ecommerce is thriving like never before, and Amazon is the leading marketplace. If you\u2019re...',
    views: '3.7k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 10,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: 'Walmart Advertising: The Definitive Guide',
    abstract:
      'Prefer to save or print this information and take it with you? Download the ebook version. 1. What is...',
    views: '4.1k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
  {
    id: 11,
    image: 'data:image/gif;base64,replace_with_your_image',
    title: '5 Key Levers to Drive Profits\u2014Levers 3, 4 and 5',
    abstract:
      'Note: This is part 4 in a 4 part series on profitability. Read part 1 here, part 2 here, and part 3 here. ...',
    views: '5.6k',
    category: 'business',
    date: 'March 17th, 2022',
    duration: 2,
    author: {
      photo: 'data:image/gif;base64,replace_with_your_image',
      role: 'Author',
      name: 'John Doe',
    },
    content:
      '<p> Today, investing in advertising is part of the cost of doing business, but if performance takes a while to materialize, it could put you in a hole that\u2019s difficult to dig out of. Many small businesses come to Vulk to solve this exact problem \u2013 to improve their ads performance as they begin ramping up their spend on Amazon ads. </p><h2 class="title is-3"> Value of the Vulk bidder for small businesses </h2> <p> A new analysis shows why more and more brands are moving towards Vulk and our advanced bidding engine. Vulk\u2019 software helps the vast majority of sellers drive dramatically more revenue in a matter of months, even if their advertising activity prior to coming to Vulk was low or non-existent. </p><p> Hundreds of sellers signed up for Vulk last year having spent $315 or less on advertising in the prior 60 days. </p><p> Just 60 days after turning on Vulk and our bidding technology, those same sellers experienced median sales jumps of more than 24X from the previous period. </p><p> For smaller sellers, this analysis shows how Vulk software can put you in the best position to scale your advertising on Amazon, and improve sales dramatically, without sacrificing time or efficiency. Even if you are new to advertising on Amazon, our software and bidding technology can help take you to the next level, and make the most out of your investment. </p><h2 class="title is-3">Methodology</h2> <p> This analysis is restricted to 350 Amazon sellers using Vulk for the first time in 2020. The data examined spans both the 60 days prior to using Vulk, along with the first 60 days using the platform and associated bidder. For ease of comparison, sellers were grouped according to their pre-Vulk advertising spend amounts. See the companion study for data on larger brands. </p>',
  },
]
`,$=i("div",{class:"py-4"},null,-1),E=i("div",{class:"py-4"},null,-1),H=i("div",{class:"py-4"},null,-1),C=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),X=m({__name:"AdvancedBlogBlockADoc",setup(g){return(d,f)=>{const s=y,n=T,a=_,r=V,l=v,u=w,p=b;return h(),c(k,null,[e(r,{id:"block-a-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block A",subtitle:"Advanced block A variation 1",link:"block-a-props"}),$,e(n,{posts:t(M),limit:3},null,8,["posts"])]),_:1})]),_:1}),e(r,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block A",subtitle:"Advanced block A variation 2",link:"block-a-props"}),E,e(n,{posts:t(B),limit:3,"upside-down":""},null,8,["posts"])]),_:1})]),_:1}),e(r,{id:"block-a-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block A Props",subtitle:"Available props for block A"}),H,e(p,null,{code:o(()=>[e(l,{language:"html",code:t(P)},null,8,["code"])]),props:o(()=>[e(u,{props:t(j).props},null,8,["props"])]),sample:o(()=>[e(l,{language:"javascript",code:t(J)},null,8,["code"])]),usage:o(()=>[C]),_:1})]),_:1})]),_:1})],64)}}}),I={props:[{name:"posts",type:"array",required:"true",default:"( ) => [ ]",values:["see sample tab for an example data structure"]},{name:"limit",type:"number",required:"false",default:"20",values:["number"]},{name:"upsideDown",type:"boolean",required:"false",default:"false",values:["boolean"]}],slots:[]},W=`
<script setup lang="ts">
import { resources } from '/@src/data/pages/blog'
<\/script>

<template>
  <ResourceGrid :posts="posts" :limit="3" upside-down />
</template>
`,R=`
export const resources = [
  {
    id: 0,
    image: '/assets/illustrations/blog/landscape-abstract-1.svg',
    title: 'How to run competitive team meetings',
    likes: '234',
    categories: [
      {
        name: 'Business',
      },
      {
        name: 'Tech',
      },
      {
        name: 'Productivity',
      },
    ],
    date: 'March 17th, 2022',
    duration: 2,
  },
  {
    id: 1,
    image: '/assets/illustrations/blog/landscape-abstract-2.svg',
    title: 'All you need to know about the One-on-One meeting',
    likes: '93',
    categories: [
      {
        name: 'Technique',
      },
      {
        name: 'Speech',
      },
      {
        name: 'work',
      },
    ],
    date: 'March 17th, 2022',
    duration: 2,
  },
  {
    id: 2,
    image: '/assets/illustrations/blog/landscape-abstract-3.svg',
    title: 'Top tips from Jeff Jordan on team management efficiency',
    likes: '54',
    categories: [
      {
        name: 'Management',
      },
      {
        name: 'Team',
      },
      {
        name: 'HR',
      },
    ],
    date: 'March 17th, 2022',
    duration: 2,
  },
]
`,q=i("div",{class:"py-4"},null,-1),G=i("div",{class:"py-4"},null,-1),L=i("div",{class:"py-4"},null,-1),Y=i("p",{class:"paragraph rem-95"}," Vulk ships with stunning advanced Feature blocks that you can use in any page. Each block comes with it's own styles and props. Use the props to build your own examples or use one of the prebuilt examples. Every block is natively supporting dark mode. See markup and props tab for more details about usage. ",-1),N=m({__name:"AdvancedBlogBlockBDoc",setup(g){return(d,f)=>{const s=y,n=S,a=_,r=V,l=v,u=w,p=b;return h(),c(k,null,[e(r,{id:"block-b-demo","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block B",subtitle:"Advanced block B variation 1",link:"block-b-props"}),q,e(n,{posts:t(F),limit:3},null,8,["posts"])]),_:1})]),_:1}),e(r,{"bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block B",subtitle:"Advanced block B variation 2",link:"block-b-props"}),G,e(n,{posts:t(D),limit:3,"upside-down":""},null,8,["posts"])]),_:1})]),_:1}),e(r,{id:"block-b-props","bordered-bottom":""},{default:o(()=>[e(a,null,{default:o(()=>[e(s,{title:"Block B Props",subtitle:"Available props for block B"}),L,e(p,null,{code:o(()=>[e(l,{language:"html",code:t(W)},null,8,["code"])]),props:o(()=>[e(u,{props:t(I).props},null,8,["props"])]),sample:o(()=>[e(l,{language:"javascript",code:t(R)},null,8,["code"])]),usage:o(()=>[Y]),_:1})]),_:1})]),_:1})],64)}}}),pe=m({__name:"blog",setup(g){const d=[{label:"Block A",target:"block-a-demo"},{label:"Block B",target:"block-b-demo"},{label:"Block C",target:"block-c-demo"},{label:"Block D",target:"block-d-demo"}];return(f,s)=>{const n=x,a=A;return h(),c("div",null,[e(n,{title:"Advanced Blog",subtitle:"Discover Vulk's advanced blocks and learn how you can customize them to build incredible and memorable projects."}),e(a,{links:d,width:"400px"}),e(X),e(N),e(z)])}}});export{pe as default};
