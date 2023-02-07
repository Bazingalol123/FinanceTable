function shutdown() {
    if (confirm("Close app?")) {
        window.close();
    }
}

function refresh() {
    location.reload();
}

function back() {
    history.back();
}