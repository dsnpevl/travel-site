import $ from 'jquery';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
var revealOnScroll = new RevealOnScroll($(".feature-item"), "85%");
var revealOnScroll = new RevealOnScroll($(".testimonial"), "60%");
