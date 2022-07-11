<script setup lang="ts">

// defineProps({});

</script>

<template>
    <div>
        <div id="AccountDropdown">
            <div class="vue-dropdown dropdown nav-top-dropdown nav-top-account-dropdown">
                <div class="vue-dropdown-trigger dropdown-trigger">
                    <button
                        data-cy="nav-account-dropdown-activator" aria-haspopup="true"
                        aria-expanded="false"
                        tabindex="0" class="nav-top-btn nav-account-btn"
                    >
                        <span>Sign In</span><i class="icon-custom nav-account-icon"></i>
                    </button>
                </div>
                <div
                    class="vue-dropdown-contents"
                    style="position: absolute; will-change: transform; display: none; top: 0px; left: 0px; transform: translate3d(0px, 17px, 0px);"
                    x-placement="bottom"
                >
                    <div x-arrow="" style="left: 0px;"></div> <ul class="dropdown-content nav-top-dropdown-account-list">
                        <li class="nav-top-dropdown-account-list-item">
                            <a
                                href="/login/bizjournals?r=%2F" data-ct="Nav : Account Anonymous User : Sign In"
                                data-cy="nav-account-dropdown-login"
                                class="nav-account-link"
                            >
                                <b>Sign In</b> <small class="nav-account-link-sub">
                                    Existing Members
                                </small>
                            </a>
                        </li> <li class="nav-top-dropdown-account-list-item">
                            <a
                                href="/register/bizjournals?r=%2F" data-ct="Nav : Account Anonymous User : Create Your FREE Account"
                                data-cy="nav-account-dropdown-register"
                                class="nav-account-link"
                            >
                                <b>Become a Member</b> <small class="nav-account-link-sub">
                                    It’s FREE!
                                </small>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->
