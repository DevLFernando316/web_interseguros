<template>
  <div class="home">
    <HeroSection />
    <AboutSection />
    <ServicesSection />
    <ValueProposition />
    <StatsSection />
    <BlogPreviewSection />
    <CTASection />
  </div>
</template>

<script setup>
import HeroSection from "@/components/home/HeroSection.vue";
import AboutSection from "@/components/home/AboutSection.vue";
import ServicesSection from "@/components/home/ServicesSection.vue";
import ValueProposition from "@/components/home/ValueProposition.vue";
import StatsSection from "@/components/home/StatsSection.vue";
import BlogPreviewSection from "@/components/home/BlogPreviewSection.vue"; // ← NUEVA
import CTASection from "@/components/home/CTASection.vue";
</script>

<style scoped></style>
