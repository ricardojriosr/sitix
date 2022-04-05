<?php require_once('header.php'); ?>

<div class="w-100 d-flex justify-content-center vertical-middle bg-hero-sports">
    <h1>NFL</h1>
    <div class="mt-50">
        <img src="assets/img/TestAsset 5.png" alt="Test Asset" class="hero-bar">

    </div>
</div>

<div class="p-30 d-flex w-100 flex-row filters space-around mt-15 mb-15">
    <a href="javascript:void(0);" onclick="orderValuesFullName();">
        <img src="assets/img/TestAsset 16.png" alt="By Team">
    </a>
    <a href="javascript:void(0);" onclick="orderValuesGame();">
        <img src="assets/img/TestAsset 15.png" alt="By Game">
    </a>
    <a href="javascript:void(0)" onclick="orderValuesName();">
        <img src="assets/img/TestAsset 14.png" alt="By Distance">
    </a>
    <div>
        Records:
        <select name="change-total" id="change-total">
            <option value="all">All</option>
            <option value="5">5</option>
            <option value="10" selected>10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
    </div>
</div>

<div class="d-flex p-30 mb-15 mt-15 flex-row filter-results">
    <div class="d-flex p-50 flex-grow-2">
        <div id="list">
            <div class="wrapper"></div>
        </div>
    </div>
    <div class="d-flex p-50 flex-grow-1 placeholder">
        PLACEHOLDER FOR PROMOTIONAL MESSAGING
    </div>
</div>

<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://pagination.js.org/dist/2.1.4/pagination.min.js"></script>
<link rel="stylesheet" href="https://pagination.js.org/dist/2.1.4/pagination.css" />
<script src="assets/js/teams.js"></script>
<?php require_once('footer.php'); ?>