var border = document.getElementById('form');

document.getElementById('button').addEventListener('mouseover', function() {
    border.style.border = '2px solid rgba(0,123,255,.6)';
});

document.getElementById('button').addEventListener('mouseout', function() {
    border.style.border = '1px solid #333';
});