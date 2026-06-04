<script>
  async function loadAuth() {
    const res = await fetch("/api/psn");
    const data = await res.json();
    console.log(data);
  }

  loadAuth();
</script>