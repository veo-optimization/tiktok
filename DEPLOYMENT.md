# 🚀 Інструкції для деплою на GitHub Pages

## Крок 1: Створення GitHub репозиторію

1. Перейдіть на [GitHub](https://github.com)
2. Натисніть "New repository"
3. Назвіть репозиторій (наприклад: `tiktok-academy`)
4. Залиште репозиторій публічним
5. **НЕ** створюйте README, .gitignore або license файли
6. Натисніть "Create repository"

## Крок 2: Підключення локального репозиторію до GitHub

```bash
# Додайте віддалений репозиторій (замініть YOUR_USERNAME та REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git

# Відправте код на GitHub
git branch -M main
git push -u origin main
```

## Крок 3: Налаштування GitHub Pages

1. Перейдіть у ваш репозиторій на GitHub
2. Перейдіть у **Settings** → **Pages**
3. У розділі **Source** виберіть:
   - **Deploy from a branch**
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Натисніть **Save**

## Крок 4: Налаштування GitHub Actions

1. Перейдіть у **Actions** у вашому репозиторії
2. GitHub автоматично виявить workflow файл
3. Натисніть **Run workflow** → **Run workflow**

## Крок 5: Перевірка деплою

1. Зачекайте завершення workflow (зазвичай 1-2 хвилини)
2. Перейдіть у **Settings** → **Pages**
3. Знайдіть URL вашого сайту (наприклад: `https://YOUR_USERNAME.github.io/REPO_NAME`)

## 🔄 Автоматичний деплой

Після налаштування кожен push у гілку `main` буде автоматично деплоїти сайт на GitHub Pages.

## 📝 Приклади команд

```bash
# Після внесення змін
git add .
git commit -m "Update website content"
git push origin main

# Сайт автоматично оновиться через 1-2 хвилини
```

## 🛠️ Вирішення проблем

### Якщо деплой не працює:
1. Перевірте, чи workflow виконався успішно в **Actions**
2. Переконайтеся, що гілка `gh-pages` створилася
3. Перевірте налаштування в **Settings** → **Pages**

### Якщо сайт не відображається:
1. Зачекайте 5-10 хвилин (GitHub Pages може потребувати часу)
2. Перевірте URL у **Settings** → **Pages**
3. Спробуйте очистити кеш браузера

## 📞 Підтримка

Якщо виникли проблеми, перевірте:
- [GitHub Pages документація](https://pages.github.com/)
- [GitHub Actions документація](https://docs.github.com/en/actions)
