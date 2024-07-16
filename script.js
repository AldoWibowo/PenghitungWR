document.getElementById('current_winrate').addEventListener('input', function() {
    const currentWinrate = parseFloat(document.getElementById('current_winrate').value);
    const messageElement = document.getElementById('current_winrate_message');

    if (currentWinrate < 60) {
        messageElement.innerText = "wkwkwk winrate diskon";
    } else {
        messageElement.innerText = "";
    }
});

document.getElementById('target_winrate').addEventListener('input', function() {
    const targetWinrate = parseFloat(document.getElementById('target_winrate').value);
    const messageElement = document.getElementById('target_winrate_message');

    if (targetWinrate === 100) {
        messageElement.innerText = "jangan ngimpi bos";
    } else {
        messageElement.innerText = "";
    }
});

document.getElementById('winrateForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const totalMatches = parseInt(document.getElementById('total_matches').value);
    const currentWinrate = parseFloat(document.getElementById('current_winrate').value) / 100;
    const targetWinrate = parseFloat(document.getElementById('target_winrate').value) / 100;

    const currentWins = totalMatches * currentWinrate;
    const requiredWins = (targetWinrate * totalMatches - currentWins) / (1 - targetWinrate);

    const resultElement = document.getElementById('result');

    if (requiredWins > 0) {
        resultElement.innerText = `Kamu membutuhkan ${Math.ceil(requiredWins)} Kemenangan tanpa kalah untuk dapat mencapai ${targetWinrate * 100}% winrate.`;
    } else {
        resultElement.innerText = `Kamu sudah berhasil melewati ${targetWinrate * 100}% winrate.`;
    }
});
