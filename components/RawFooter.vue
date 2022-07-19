<script setup lang="ts">
/*
const props = defineProps({
    data: { type: Object, required: true },
});
*/
</script>

<template>
    <footer class="footer">
        <slot></slot>
        <!-- view:footer:header -->
        <div class="footer__header">
            <div class="container ">
                <div class="relative">
                    <div
                        class="footer__back-to-top"
                        data-ct="2016 Footer :  : Back to Top"
                    >
                        <a
                            href="javascript:void(0);"
                            onclick="window.scrollTo(0,0)"
                        >
                            Back to Top
                            <i
                                class="icon-up-dir"
                            ></i>
                        </a>
                    </div>

                    <ul class="footer__logo-and-nav-links">
                        <li class="footer__logo">
                            <a
                                class="footer__logo-link" href="/"
                                data-ct="2016 Footer : Logo"
                            >
                                <img
                                    src="https://assets.bizjournals.com/static/img/logos/horizontal-black/bizjournals-logo.svg"
                                    alt=""
                                    onerror="this.onerror=null;this.src=this.src.replace('.svg','.png');"
                                    class="footer__logo-img"
                                />
                            </a>
                        </li>
                        <li
                            class="hidden--xs hidden--sm"
                            data-ct="2016 Footer : Home"
                        >
                            <a
                                href="https://www.bizjournals.com"
                            >Home</a>
                        </li>
                        <li
                            class="hidden--xs hidden--sm"
                            data-ct="2016 Footer : News"
                        >
                            <a
                                href="https://www.bizjournals.com/news"
                            >News</a>
                        </li>
                        <li
                            class="hidden--xs hidden--sm"
                            data-ct="2016 Footer : People"
                        >
                            <a
                                href="https://www.bizjournals.com/potm"
                            >People</a>
                        </li>
                        <li
                            class="hidden--xs hidden--sm"
                            data-ct="2016 Footer : Companies"
                        >
                            <a
                                href="https://www.bizjournals.com/bizjournals/datacenter/companies"
                            >Companies</a>
                        </li>
                        <li
                            class="hidden--xs hidden--sm"
                            data-ct="2016 Footer : Events"
                        >
                            <a
                                href="https://www.bizjournals.com/calendar/bizjournals"
                            >Events</a>
                        </li>
                        <li
                            class="hidden--xs hidden--sm"
                            data-ct="2016 Footer : Store"
                        >
                            <a
                                href="https://promo.bizjournals.com/bizjournals/store/"
                            >Store</a>
                        </li>
                    </ul>
                </div><!-- /.relative -->
            </div><!-- /.container -->
        </div><!-- /.footer__header -->
        <!-- view:footer:body -->
        <div class="footer__body hidden--xs hidden--sm">
            <div class="container ">
                <div class="row">
                    <div class="1/1 subscriber-promo md__1/4">
                        <h4 class="link-list-title">
                            Subscribers
                        </h4>
                        <div class="row">
                            <div class="1/1">
                                <ul class="link-list">
                                    <li data-ct="2016 Footer : Manage your Account">
                                        <a href="/myaccount?market=bizjournals">
                                            <span
                                                class="link-list-item__title"
                                            >Manage
                                                your Account</span>
                                        </a>
                                    </li>
                                    <li
                                        data-ct="2016 Footer : Manage My Advertising"
                                    >
                                        <a href="https://www.bizjournals.com/ads">
                                            <span
                                                class="link-list-item__title"
                                            >Manage
                                                My Advertising</span>
                                        </a>
                                    </li>
                                    <li data-ct="2016 Footer : Book of Lists">
                                        <a
                                            href="https://www.bizjournals.com/book-of-lists"
                                        >
                                            <span class="link-list-item__title">Book
                                                of Lists</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="1/1 md__1/4">
                        <h4 class="link-list-title">
                            About &amp; Contact
                        </h4>
                        <ul class="link-list">
                            <li data-ct="2016 Footer : About The Business Journals">
                                <a href="https://www.bizjournals.com/about-us/">
                                    <span class="link-list-item__title">About The
                                        Business Journals</span>
                                </a>
                            </li>
                            <li data-ct="2016 Footer : Advertise">
                                <a
                                    href="https://advertise.bizjournals.com?ana=om_wb_dg_ftr"
                                >
                                    <span
                                        class="link-list-item__title"
                                    >Advertise</span>
                                </a>
                            </li>
                            <li data-ct="2016 Footer : Help &amp; FAQs">
                                <a href="https://support.bizjournals.com/en/">
                                    <span class="link-list-item__title">Help &amp;
                                        FAQs</span>
                                </a>
                            </li>
                            <li
                                data-ct="2016 Footer : Circulation Sales Center Directory"
                            >
                                <a
                                    href="https://www.bizjournals.com/about-us/call-center"
                                >
                                    <span class="link-list-item__title">Circulation
                                        Sales Center Directory</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div class="1/1 md__1/4">
                        <h4 class="link-list-title">
                            Follow Us
                        </h4>
                        <div class="social-follow-bizj">
                            <a
                                href="https://twitter.com/bizjournals"
                                class="btn btn--social btn--twitter btn--twitter--footer u-float-left"
                                style="clear: left;" target="_blank"
                                rel="noopener"
                                data-ct="2016 Footer :  The Business Journals : twt"
                            >
                                <i class="bi-twitter"></i><span
                                    class="icon__hidden-text"
                                > Twitter</span>
                            </a>
                            <a
                                href="http://www.linkedin.com/company/american-city-business-journals"
                                class="btn btn--social btn--linkedin btn--linkedin--footer u-float-left"
                                style="clear: none; margin-left: 0;" target="_blank"
                                rel="noopener"
                                data-ct="2016 Footer :  The Business Journals : lkn"
                            >
                                <i class="bi-linkedin"></i><span
                                    class="icon__hidden-text"
                                > LinkedIn</span>
                            </a>
                            <a
                                href="https://www.facebook.com/bizjournals"
                                class="btn btn--social btn--facebook btn--facebook--footer u-float-left"
                                style="clear: left; margin-bottom:1rem; margin-left: 0;"
                                target="_blank" rel="noopener"
                                data-ct="2016 Footer :  The Business Journals : fbk"
                            >
                                <i class="bi-facebook"></i><span
                                    class="icon__hidden-text"
                                > Facebook</span>
                            </a>
                            <a
                                href="https://instagram.com/americancitybusinessjrnls"
                                class="btn btn--social btn--instagram btn--instagram--footer u-float-left"
                                style="clear: none; margin-bottom:1rem; margin-left: 0;"
                                target="_blank" rel="noopener"
                                data-ct="2016 Footer :  The Business Journals : ins"
                            >
                                <i class="bi-instagram"></i><span
                                    class="icon__hidden-text"
                                > Instagram</span>
                            </a>
                        </div>
                        <div class="multi_row_column">
                            <h4 class="link-list-title">
                                Newsletters
                            </h4>
                            <ul class="link-list">
                                <li data-ct="2016 Footer : Sign Up Now">
                                    <a
                                        href="https://www.bizjournals.com/account/bizjournals/newsletters"
                                    >
                                        <span class="link-list-item__title">Sign Up
                                            Now</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="1/1 md__1/4">
                        <h4 class="link-list-title">
                            ACBJ
                        </h4>
                        <ul class="link-list">
                            <li
                                data-ct="2016 Footer : American City Business Journals"
                            >
                                <a href="http://www.acbj.com/">
                                    <span class="link-list-item__title">American
                                        City Business Journals</span>
                                </a>
                            </li>
                            <li data-ct="2016 Footer : AmericanInno">
                                <a href="https://www.bizjournals.com/inno">
                                    <span
                                        class="link-list-item__title"
                                    >AmericanInno</span>
                                </a>
                            </li>
                            <li data-ct="2016 Footer : BizEquity">
                                <a href="https://www.bizequity.com/">
                                    <span
                                        class="link-list-item__title"
                                    >BizEquity</span>
                                </a>
                            </li>
                            <li data-ct="2016 Footer : BizLeads">
                                <a href="https://www.bizleads.com/">
                                    <span
                                        class="link-list-item__title"
                                    >BizLeads</span>
                                </a>
                            </li>
                            <li data-ct="2016 Footer : Bizwomen">
                                <a href="https://www.bizjournals.com/bizwomen">
                                    <span
                                        class="link-list-item__title"
                                    >Bizwomen</span>
                                </a>
                            </li>
                            <li data-ct="2016 Footer : Hemmings">
                                <a href="http://www.hemmings.com/">
                                    <span
                                        class="link-list-item__title"
                                    >Hemmings</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__footer">
            <div class="container ">
                <ul class="ul list--unstyled list--inline">
                    <li>
                        <a href="/useragreement">
                            User Agreement
                        </a>
                    </li>
                    <li>&nbsp; | &nbsp;</li>
                    <li>
                        <a href="/privacy">
                            Privacy Policy
                        </a>
                    </li>
                    <li class="hidden--xs hidden--sm">
                        &nbsp; | &nbsp;
                    </li>
                    <li>
                        <br class="hidden--md hidden--lg hidden--xl" /><a
                            href="/privacy#X"
                        >Your California Privacy Rights</a>
                    </li>
                    <li>&nbsp; | &nbsp;</li>
                    <li>
                        <a href="/privacy#VII">
                            Ad Choices
                        </a>
                    </li>
                    <li class="d-block mt-3">
                        <button
                            id="ot-sdk-btn" type="button"
                            role="button"
                            class="ot-sdk-show-settings btn btn--primary"
                        >
                            &lt;p&gt;&lt;p&gt;
                        </button>
                    </li>
                </ul>
                <p>
                    © 2022 American City Business Journals. All rights reserved. Use
                    of and/or registration on any portion of this site constitutes
                    acceptance of
                    our <a href="/useragreement">
                        User Agreement
                    </a> (updated January
                    1, 2021) and <a href="/privacy">Privacy Policy and Cookie
                        Statement</a> (updated July 1, 2022).
                    The material on this site may not be reproduced, distributed,
                    transmitted, cached or otherwise used, except with the prior
                    written permission of American City Business Journals.
                </p>
            </div>
        </div>
    </footer>
</template>

<!--
<style lang="scss">
</style>
-->
