# 🚀 Projet React + Vite + Docker (Linux / Windows)

## 📦 Prérequis

- Docker installé
- Docker Compose disponible

---

## 🧱 Structure du projet

- `docker-compose.linux.yml`
- `docker-compose.windows.yml`
- `.env` (Linux uniquement pour UID/GID)
- `package.json`
- `src/`

---

<!-- TODO: adapter explications generate-react-cli -->

# 🐧 Installation (Linux)

```bash
git clone <repo>
cd <repo>
docker compose -f docker-compose.linux.yml run --rm app npm install
docker compose -f docker-compose.linux.yml up
```

👉 Accès : http://localhost:5173

---

# 🪟 Installation (Windows PowerShell)

```powershell
git clone <repo>
cd <repo>
docker compose -f docker-compose.windows.yml run --rm app npm install
docker compose -f docker-compose.windows.yml up
```

👉 Accès : http://localhost:5173

---

# ⚙️ Commandes utiles

## Générer un composant

### Linux

```bash
docker compose -f docker-compose.linux.yml run --rm app npm run g:component NomDuComposant
```

### Windows

```powershell
docker compose -f docker-compose.windows.yml run --rm app npm run g:component NomDuComposant
```

---

## Installer une dépendance

### Linux

```bash
docker compose -f docker-compose.linux.yml run --rm app npm install axios
```

### Windows

```powershell
docker compose -f docker-compose.windows.yml run --rm app npm install axios
```

---

# 🧠 Rappels importants

- ❌ Ne jamais versionner `node_modules`
- ✔ Toujours utiliser Docker pour installer les dépendances
- ✔ Séparer :
  - création (docker run)
  - développement (docker compose up)
  - commandes ponctuelles (docker compose run)

---

# 🔥 Workflow rapide

## Linux

```bash
docker compose -f docker-compose.linux.yml run --rm app npm install
docker compose -f docker-compose.linux.yml up
```

## Windows

```powershell
docker compose -f docker-compose.windows.yml run --rm app npm install
docker compose -f docker-compose.windows.yml up
```

---

# ✅ Résultat

- Environnement reproductible
- Compatible Linux / Windows
- Pas de problème de permissions
- Setup propre pour projet public
