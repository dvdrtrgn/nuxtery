<script setup lang="ts">

// defineProps({});

</script>

<template>
    <div>
        <div id="SelectCityDropdown" class="pl-3 pl-sm-4">
            <button
                id="SelectCityDropdownTrigger" href="#"
                role="button"
                data-cy="nav-city-btn" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false"
                class="dropdown-toggle dropdown-toggle-remove-bs-icon border-0 rounded-0"
            >
                <span class="font-weight-bold">Select a City</span><i class="bi bi-chevron-down px-1" style="font-size: 1rem;"></i>
            </button> <div
                id="SelectCityDropdownMenu" aria-labelledby="SelectCityDropdownTrigger"
                class="dropdown-menu rounded-0 border-0 py-3 px-5 px-lg-4 m-0 shadow"
                style=""
            >
                <a
                    href="/" data-ct="Nav : Select City : National"
                    data-cy="market-nav-2661"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        National
                    </span>
                </a> <a
                    href="/albany" data-ct="Nav : Select City : Albany"
                    data-cy="market-nav-2251"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Albany
                    </span>
                </a> <a
                    href="/albuquerque" data-ct="Nav : Select City : Albuquerque"
                    data-cy="market-nav-2261"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Albuquerque
                    </span>
                </a> <a
                    href="/atlanta" data-ct="Nav : Select City : Atlanta"
                    data-cy="market-nav-2271"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Atlanta
                    </span>
                </a> <a
                    href="/austin" data-ct="Nav : Select City : Austin"
                    data-cy="market-nav-2281"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Austin
                    </span>
                </a> <a
                    href="/baltimore" data-ct="Nav : Select City : Baltimore"
                    data-cy="market-nav-2291"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Baltimore
                    </span>
                </a> <a
                    href="/birmingham" data-ct="Nav : Select City : Birmingham"
                    data-cy="market-nav-2301"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Birmingham
                    </span>
                </a> <a
                    href="/boston" data-ct="Nav : Select City : Boston"
                    data-cy="market-nav-2311"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Boston
                    </span>
                </a> <a
                    href="/buffalo" data-ct="Nav : Select City : Buffalo"
                    data-cy="market-nav-2321"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Buffalo
                    </span>
                </a> <a
                    href="/charlotte" data-ct="Nav : Select City : Charlotte"
                    data-cy="market-nav-2331"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Charlotte
                    </span>
                </a> <a
                    href="/chicago" data-ct="Nav : Select City : Chicago"
                    data-cy="market-nav-2691"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Chicago
                    </span>
                </a> <a
                    href="/cincinnati" data-ct="Nav : Select City : Cincinnati"
                    data-cy="market-nav-2341"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Cincinnati
                    </span>
                </a> <a
                    href="/cleveland" data-ct="Nav : Select City : Cleveland"
                    data-cy="market-nav-2701"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Cleveland
                    </span>
                </a> <a
                    href="/columbus" data-ct="Nav : Select City : Columbus"
                    data-cy="market-nav-2351"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Columbus
                    </span>
                </a> <a
                    href="/dallas" data-ct="Nav : Select City : Dallas"
                    data-cy="market-nav-2361"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Dallas
                    </span>
                </a> <a
                    href="/dayton" data-ct="Nav : Select City : Dayton"
                    data-cy="market-nav-2371"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Dayton
                    </span>
                </a> <a
                    href="/denver" data-ct="Nav : Select City : Denver"
                    data-cy="market-nav-2381"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Denver
                    </span>
                </a> <a
                    href="/triad" data-ct="Nav : Select City : Greensboro/Winston-Salem"
                    data-cy="market-nav-2611"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Greensboro/Winston-Salem
                    </span>
                </a> <a
                    href="/pacific" data-ct="Nav : Select City : Honolulu"
                    data-cy="market-nav-2481"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Honolulu
                    </span>
                </a> <a
                    href="/houston" data-ct="Nav : Select City : Houston"
                    data-cy="market-nav-2391"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Houston
                    </span>
                </a> <a
                    href="/jacksonville" data-ct="Nav : Select City : Jacksonville"
                    data-cy="market-nav-2401"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Jacksonville
                    </span>
                </a> <a
                    href="/kansascity" data-ct="Nav : Select City : Kansas City"
                    data-cy="market-nav-2411"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Kansas City
                    </span>
                </a> <a
                    href="/losangeles" data-ct="Nav : Select City : Los Angeles"
                    data-cy="market-nav-2421"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Los Angeles
                    </span>
                </a> <a
                    href="/louisville" data-ct="Nav : Select City : Louisville"
                    data-cy="market-nav-2431"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Louisville
                    </span>
                </a> <a
                    href="/memphis" data-ct="Nav : Select City : Memphis"
                    data-cy="market-nav-2441"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Memphis
                    </span>
                </a> <a
                    href="/southflorida" data-ct="Nav : Select City : Miami/Fort Lauderdale"
                    data-cy="market-nav-2581"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Miami/Fort Lauderdale
                    </span>
                </a> <a
                    href="/milwaukee" data-ct="Nav : Select City : Milwaukee"
                    data-cy="market-nav-2451"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Milwaukee
                    </span>
                </a> <a
                    href="/twincities" data-ct="Nav : Select City : Minneapolis/St. Paul"
                    data-cy="market-nav-2631"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Minneapolis/St. Paul
                    </span>
                </a> <a
                    href="/nashville" data-ct="Nav : Select City : Nashville"
                    data-cy="market-nav-2461"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Nashville
                    </span>
                </a> <a
                    href="/newyork" data-ct="Nav : Select City : New York"
                    data-cy="market-nav-2851"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        New York
                    </span>
                </a> <a
                    href="/orlando" data-ct="Nav : Select City : Orlando"
                    data-cy="market-nav-2471"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Orlando
                    </span>
                </a> <a
                    href="/philadelphia" data-ct="Nav : Select City : Philadelphia"
                    data-cy="market-nav-2491"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Philadelphia
                    </span>
                </a> <a
                    href="/phoenix" data-ct="Nav : Select City : Phoenix"
                    data-cy="market-nav-2501"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Phoenix
                    </span>
                </a> <a
                    href="/pittsburgh" data-ct="Nav : Select City : Pittsburgh"
                    data-cy="market-nav-2511"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Pittsburgh
                    </span>
                </a> <a
                    href="/portland" data-ct="Nav : Select City : Portland"
                    data-cy="market-nav-2521"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Portland
                    </span>
                </a> <a
                    href="/rhodeisland" data-ct="Nav : Select City : Providence"
                    data-cy="market-nav-2891"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Providence
                    </span>
                </a> <a
                    href="/triangle" data-ct="Nav : Select City : Raleigh/Durham"
                    data-cy="market-nav-2621"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Raleigh/Durham
                    </span>
                </a> <a
                    href="/sacramento" data-ct="Nav : Select City : Sacramento"
                    data-cy="market-nav-2531"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Sacramento
                    </span>
                </a> <a
                    href="/sanantonio" data-ct="Nav : Select City : San Antonio"
                    data-cy="market-nav-2541"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        San Antonio
                    </span>
                </a> <a
                    href="/sanfrancisco" data-ct="Nav : Select City : San Francisco"
                    data-cy="market-nav-2551"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        San Francisco
                    </span>
                </a> <a
                    href="/seattle" data-ct="Nav : Select City : Seattle"
                    data-cy="market-nav-2571"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Seattle
                    </span>
                </a> <a
                    href="/sanjose" data-ct="Nav : Select City : Silicon Valley"
                    data-cy="market-nav-2561"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Silicon Valley
                    </span>
                </a> <a
                    href="/stlouis" data-ct="Nav : Select City : St. Louis"
                    data-cy="market-nav-2591"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        St. Louis
                    </span>
                </a> <a
                    href="/tampabay" data-ct="Nav : Select City : Tampa Bay"
                    data-cy="market-nav-2601"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Tampa Bay
                    </span>
                </a> <a
                    href="/washington" data-ct="Nav : Select City : Washington, D.C."
                    data-cy="market-nav-2641"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Washington, D.C.
                    </span>
                </a> <a
                    href="/wichita" data-ct="Nav : Select City : Wichita"
                    data-cy="market-nav-2651"
                    class="dropdown-item p-0 m-0"
                >
                    <span class="line-height-reset">
                        Wichita
                    </span>
                </a>
            </div>
        </div>
        <slot></slot>
    </div>
</template>

<!--
<style lang="scss">
</style>
-->
