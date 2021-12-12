<template>
  <Layout>
    
    <h2>What is Build&nbsp;Info</h2>
    <p>
    
Simply think about the idea that you can get fully traceable information for your build that describes  all the details about the build. Broken down into segments the build is a version of a program; and the info is all of the details contained within the build - artifacts, project modules, dependencies - all of the items that create the build itself. When you put the two together you get a detailed view of your code and the components that created it. It is a snapshot into the inner workings of your code. 
When we have all the information collected by the build agent we will have the list of project modules, artifacts, dependencies, environment variables and more.
</p>
    <g-image
      class="img-fluid"
      src="~/assets/images/homepage/content/first-image.png"
    />

    <h2>Why Do I Care</h2>
    <p>
    With the build info we have the power to analyze our builds we can easily get the information about artifacts that we are using, the time it took to run the build and much more. With this information we can improve quality to make our build faster and even help us with some Cyber attacks. Because 
Open Source Software is amazing but it is not without its faults or vulnerabilities. Free code can make your build run smoothly but it can also contain active threats to your project, code, business, customers, and overall software environment. This has been proven time and time again with the recent hacks to SolarWinds, the Colonial Pipeline Hack, Equifax and many others. This is why you should care about build info. Knowing what metadata is contained within your build can help you identify known vulnerabilities and malicious code. This is one of the many reasons why we are so happy to be able to share Build Info with you - so you can have one more layer of security to your code. 
    </p>
    
    <h2>How Do I Get Build Info?</h2>
    <p>realized the need for developers and companies to review and evaluate their build on the meta level. One of the core features of JFrog’s flagship tool, Artifactory, is build-info. JFrog is committed to being a community first company and these recent attacks and the increased sophistication of malicious hackers was a catalyst for Yoav to decide to break out Build-Info from Artifactory and offer it as an open source solution to reviewing the metadata in your build. </p>
    <g-image
      class="img-fluid"
      src="~/assets/images/homepage/content/sec-image.gif"
    />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'JFrog Build Info'
  }
}
</script> 

<style>

</style>
