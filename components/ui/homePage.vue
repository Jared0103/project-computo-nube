<template>
  <main class="dashboard">
    <aside class="sidebar" />
    <section class="content">
      <header class="header">
        <h1 class="title">
          ACTIVIDAD
        </h1>
      </header>
      <article class="stats-card">
        <div class="date-filter">
          <h2 class="period">
            Enero 2020 - febrero 2020
          </h2>
          <nav class="time-nav" role="navigation" aria-label="Time period navigation">
            <div class="time-selector">
              <button class="time-btn active">
                Mes
              </button>
              <button class="time-btn">
                1 Año
              </button>
              <button class="time-btn">
                2 Año
              </button>
            </div>
          </nav>
        </div>
        <div class="indicator" />
        <div class="metrics">
          <div class="metric-group">
            <h3 class="metric-label">
              Contactos
            </h3>
            <p class="metric-value">
              123000
            </p>
          </div>
          <div class="metric-group">
            <h3 class="metric-label">
              Ventas
            </h3>
            <p class="metric-value secondary">
              2300
            </p>
          </div>
        </div>
        <div class="chart-container">
          <div class="chart-line" />
          <p class="chart-label">
            250
          </p>
        </div>
        <div class="chart">
          <div class="bars">
            <div class="bar-group">
              <div class="bar-columns">
                <div class="bar gray" />
                <div class="bar gray-alt" />
                <div class="bar primary" />
                <div class="bar gray" />
                <div class="bar gray-alt" />
                <div class="bar gray-light" />
                <div class="bar secondary" />
                <div class="bar secondary" />
                <div class="bar primary" />
                <div class="bar gray" />
                <div class="bar gray-alt" />
                <div class="bar gray-dark" />
                <div class="bar primary" />
              </div>
              <div class="chart-baseline" />
            </div>
            <div class="chart-labels">
              <span class="y-label">200</span>
              <span class="y-label">150</span>
              <span class="y-label">100</span>
              <span class="y-label">50</span>
              <span class="y-label">0</span>
            </div>
          </div>
        </div>
      </article>
      <section class="bottom-cards">
        <article class="quotes-card">
          <h2 class="card-title">
            Cotizaciónes Nuevas
          </h2>
          <ul class="quote-list">
            <li class="quote-item">
              1. Venta de Hp ...
            </li>
            <li class="quote-item">
              2. Venta de Audifonos
            </li>
            <li class="quote-item">
              3. Hp Portatil...
            </li>
          </ul>
        </article>
        <article class="products-card">
          <h2 class="card-title">
            Ultimos productos
          </h2>
          <ul class="product-list">
            <li class="product-item">
              Hp pavilion h2342.
            </li>
            <li class="product-item">
              Hp pavilion h2342wfwg sdg aeg err
            </li>
            <li class="product-item">
              Hp pavilion h2342wfwg sdg aeg err
            </li>
          </ul>
        </article>
      </section>
    </section>
  </main>
</template>

<style scoped>
.dashboard {
  background: #f8f8f8;
  padding: 0 80px 0 0;
  display: flex;
  gap: 20px;
  overflow: hidden;
}

.sidebar {
  width: 25%;
}

.content {
  width: 75%;
  margin-left: 20px;
}

.header {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
}

.title {
  color: #1b262c;
  font: 700 36px Lato, sans-serif;
  margin: 31px 0 0;
}

.stats-card {
  border-radius: 25px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  margin: 49px 0 0;
  padding: 29px 46px 66px;
}

.date-filter {
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;
}

.period {
  color: #1b262c;
  font: 700 18px Lato, sans-serif;
  margin: 15px 0 0;
}

.time-nav {
  border-radius: 50px;
  background: #c4c4c4;
  padding: 3px;
}

.time-selector {
  display: flex;
  gap: 26px;
}

.time-btn {
  color: #1b262c;
  font: 700 18px Lato, sans-serif;
  background: none;
  border: none;
  padding: 5px 31px;
  cursor: pointer;
}

.time-btn.active {
  border-radius: 50px;
  background: #fff;
}

.indicator {
  border-radius: 50px;
  background: #0f4c75;
  width: 94px;
  height: 5px;
  margin: 47px 0 0;
}

.metrics {
  display: flex;
  gap: 20px;
  font: 700 18px Lato, sans-serif;
}

.metric-group {
  display: flex;
  flex-direction: column;
}

.metric-label {
  color: #1b262c;
  font-size: 18px;
  margin: 0;
}

.metric-value {
  font-size: 24px;
  margin: 5px 0 0;
}

.metric-value.secondary {
  color: #464858;
}

.chart-container {
  display: flex;
  margin: 56px 0 0;
  gap: 5px;
  color: #464858;
  font: 700 13px Lato, sans-serif;
}

.chart-line {
  background: #c4c4c4;
  width: 838px;
  height: 1px;
  margin: 13px 0 0;
}

.chart {
  margin: 11px 0 0;
}

.bars {
  display: flex;
  gap: 5px;
}

.bar-group {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.bar-columns {
  display: flex;
  align-items: flex-end;
  gap: 34px;
  flex-wrap: wrap;
}

.bar {
  width: 30px;
}

.bar.gray { background: #c4c4c4; height: 60px; }
.bar.gray-alt { background: #c4c4c4; height: 83px; }
.bar.primary { background: #0f4c75; height: 192px; }
.bar.gray-light { background: #c4c4c4; height: 42px; }
.bar.secondary { background: #3282b8; height: 164px; }
.bar.gray-dark { background: #c4c4c4; height: 113px; }

.chart-baseline {
  background: #c4c4c4;
  height: 1px;
  width: 100%;
}

.chart-labels {
  display: flex;
  flex-direction: column;
  color: #464858;
  font: 700 13px Lato, sans-serif;
  gap: 24px;
}

.bottom-cards {
  display: flex;
  margin: 40px 0 0;
  gap: 20px;
}

.quotes-card,
.products-card {
  border-radius: 25px;
  background: #fff;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
  padding: 27px 24px 51px;
  color: #1b262c;
  font: 700 24px Lato, sans-serif;
}

.quotes-card {
  width: 36%;
}

.products-card {
  width: 64%;
}

.card-title {
  font-size: 18px;
  margin: 0;
}

.quote-list,
.product-list {
  list-style: none;
  padding: 0;
  margin: 21px 0 0 19px;
}

.quote-item,
.product-item {
  margin: 16px 0 0;
}

@media (max-width: 991px) {
  .dashboard {
    flex-direction: column;
    padding: 0 20px;
  }

  .sidebar,
  .content {
    width: 100%;
    margin-left: 0;
  }

  .stats-card {
    margin: 40px 0 0;
    padding: 20px;
  }

  .bottom-cards {
    flex-direction: column;
  }

  .quotes-card,
  .products-card {
    width: 100%;
    margin: 35px 0 0;
    padding: 20px;
  }

  .chart-line {
    max-width: 100%;
  }

  .bar-columns {
    gap: 20px;
  }
}
</style>
