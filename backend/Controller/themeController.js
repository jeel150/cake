import Theme from "../Models/Theme.js";

// Get all themes (optional, for debugging/admin use)
export async function getAllThemes(req, res) {
  try {
    const themes = await Theme.find().sort({ createdAt: -1 });
    res.json(themes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get active theme
export async function getActiveTheme(req, res) {
  try {
    const theme = await Theme.findOne({ isActive: true });
    if (!theme) {
      // Instead of 404, return a default "None" theme object
      return res.json({
        id: 0,
        name: "None",
        colors: null
      });
    }
    res.json(theme);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Get theme by id
export async function getThemeById(req, res) {
  try {
    const theme = await Theme.findById(req.params.id);
    if (!theme) {
      return res.status(404).json({ message: "Theme not found" });
    }
    res.json(theme);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Create (or update) and activate a theme
export async function createTheme(req, res) {
  try {
    const { name, image, colors } = req.body;

    // Deactivate all themes first
    await Theme.updateMany({}, { $set: { isActive: false } });

    // Check if theme exists already
    let theme = await Theme.findOne({ name });

    if (theme) {
      // Update theme details and activate
      theme.image = image;
      theme.colors = colors;
      theme.isActive = true;
      await theme.save();
    } else {
      // Create new theme and set active
      theme = new Theme({ name, image, colors, isActive: true });
      await theme.save();
    }

    res.status(201).json(theme);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Update a theme (not usually needed in your case)
export async function updateTheme(req, res) {
  try {
    const theme = await Theme.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!theme) {
      return res.status(404).json({ message: "Theme not found" });
    }

    res.json(theme);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

// Delete a theme
export async function deleteTheme(req, res) {
  try {
    const theme = await Theme.findByIdAndDelete(req.params.id);

    if (!theme) {
      return res.status(404).json({ message: "Theme not found" });
    }

    res.json({ message: "Theme deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
// Reset theme (remove active theme)
export async function resetTheme(req, res) {
  try {
    // Set all themes inactive
    await Theme.updateMany({}, { $set: { isActive: false } });

    res.json({ message: "No active theme" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

