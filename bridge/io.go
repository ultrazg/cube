package bridge

import (
	"github.com/wailsapp/wails/v2/pkg/runtime"
)

func (a *App) SelectFile() (string, error) {
	result, err := runtime.OpenFileDialog(a.ctx, runtime.OpenDialogOptions{
		Title: "选择图片文件",
		Filters: []runtime.FileFilter{
			{
				DisplayName: "图片文件",
				Pattern:     "*.jpg;*.png;*.jpeg",
			},
		},
	})
	if err != nil {
		return "", err
	}

	return result, nil
}
