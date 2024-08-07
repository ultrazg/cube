package bridge

import (
	"context"
	"fmt"

	"github.com/google/generative-ai-go/genai"
	"google.golang.org/api/option"
)

func (a *App) Gemini() (genai.Part, error) {
	ctx := context.Background()
	// Access your API key as an environment variable (see "Set up your API key" above)
	client, err := genai.NewClient(ctx, option.WithAPIKey("API-KEY"))
	if err != nil {
		fmt.Println("client", err.Error())

		return nil, err
	}
	defer client.Close()

	// The Gemini 1.5 models are versatile and work with most use cases
	model := client.GenerativeModel("gemini-1.5-flash")

	resp, err := model.GenerateContent(ctx, genai.Text("你知道chatgpt吗？"))
	if err != nil {
		fmt.Println("resp", err.Error())

		return nil, err
	}

	fmt.Println(resp.Candidates[0].Content.Parts[0])

	return resp.Candidates[0].Content.Parts[0], nil
}
