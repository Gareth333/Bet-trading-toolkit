function calculateDutching() {
  const odd1 = parseFloat(document.getElementById('odd1').value);
  const odd2 = parseFloat(document.getElementById('odd2').value);
  const stake = parseFloat(document.getElementById('stake').value);
  if (!odd1 || !odd2 || !stake) return;

  const inv1 = 1 / odd1;
  const inv2 = 1 / odd2;
  const totalInverse = inv1 + inv2;

  const stake1 = (inv1 / totalInverse) * stake;
  const stake2 = (inv2 / totalInverse) * stake;

  const profit1 = (stake1 * odd1) - stake;
  const profit2 = (stake2 * odd2) - stake;

  document.getElementById('dutchingResult').innerText =
    `Stake 1: £${stake1.toFixed(2)}, Stake 2: £${stake2.toFixed(2)}\nProfit1: £${profit1.toFixed(2)}, Profit2: £${profit2.toFixed(2)}`;
}

function calculateLayHedge() {
  const backOdds = parseFloat(document.getElementById('backOdds').value);
  const backStake = parseFloat(document.getElementById('backStake').value);
  const layOdds = parseFloat(document.getElementById('layOdds').value);
  if (!backOdds || !backStake || !layOdds) return;

  const layStake = (backOdds * backStake) / (layOdds - 0.02);
  document.getElementById('layResult').innerText =
    `Lay Stake: £${layStake.toFixed(2)}`;
}
